package controllers

import javax.inject._
import models._

import play.api.i18n._
import play.api.libs.json.Json
import play.api.mvc._

import scala.concurrent.{ExecutionContext, Future}
import scala.util.{Failure, Success}

class ProductsController (implicit ec: ExecutionContext)
  extends MessagesAbstractController(cc) {


  def search = Action.async {implicit request =>
    Ok(Json.toJson(products))
  }


  def addProduct = Action.async { implicit request =>
    // Bind the form first, then fold the result, passing a function to handle errors, and a function to handle succes.
    var a:Seq[Category] = Seq[Category]()
    val categories = categoryRepo.list().onComplete{
      case Success(cat) => a= cat
      case Failure(_) => print("fail")
    }

    productForm.bindFromRequest.fold(
      // The error function. We return the index page with the error form, which will render the errors.
      // We also wrap the result in a successful future, since this action is synchronous, but we're required to return
      // a future because the person creation function returns a future.
      errorForm => {
        Future.successful(
            Ok(views.html.index(errorForm,a))
          )
      },
      // There were no errors in the from, so create the person.
      product => {
        productsRepo.create(product.name, product.description, product.category).map { _ =>
          // If successful, we simply redirect to the index page.
          Redirect(routes.ProductController.index).flashing("success" -> "product.created")
        }
      }
    )
  }


  /**
   * A REST endpoint that gets all the people as JSON.
   */
  def getProducts = Action.async { implicit request =>
    productsRepo.list().map { products =>
      Ok(Json.toJson(products))
    }
  }


  def handlePost = Action.async { implicit request =>
    val name = request.body.asJson.get("name").as[String]
    val desc = request.body.asJson.get("description").as[String]

    productsRepo.create(name,desc,1).map { product =>
      Ok(Json.toJson(product))
    }
  }



}
