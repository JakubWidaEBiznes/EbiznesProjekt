// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jakub_wida/Documents/MagisterSem2/EBiznes/Projekt/Project/play-react-slick-foreign/conf/routes
// @DATE:Tue Jun 12 14:49:35 CEST 2018

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:6
  ProductController_1: controllers.ProductController,
  // @LINE:13
  Assets_0: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:6
    ProductController_1: controllers.ProductController,
    // @LINE:13
    Assets_0: controllers.Assets
  ) = this(errorHandler, ProductController_1, Assets_0, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, ProductController_1, Assets_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.ProductController.index"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """addproduct""", """controllers.ProductController.addProduct"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """products""", """controllers.ProductController.getProducts"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """category/""" + "$" + """id<[^/]+>""", """controllers.ProductController.getByCategory(id:Integer)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """categories""", """controllers.ProductController.getByCategories"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """handlepost""", """controllers.ProductController.handlePost"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.versioned(path:String = "/public", file:Asset)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:6
  private[this] lazy val controllers_ProductController_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_ProductController_index0_invoker = createInvoker(
    ProductController_1.index,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """ Home page""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_ProductController_addProduct1_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("addproduct")))
  )
  private[this] lazy val controllers_ProductController_addProduct1_invoker = createInvoker(
    ProductController_1.addProduct,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "addProduct",
      Nil,
      "POST",
      this.prefix + """addproduct""",
      """""",
      Seq()
    )
  )

  // @LINE:8
  private[this] lazy val controllers_ProductController_getProducts2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("products")))
  )
  private[this] lazy val controllers_ProductController_getProducts2_invoker = createInvoker(
    ProductController_1.getProducts,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getProducts",
      Nil,
      "GET",
      this.prefix + """products""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_ProductController_getByCategory3_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("category/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ProductController_getByCategory3_invoker = createInvoker(
    ProductController_1.getByCategory(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getByCategory",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """category/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:10
  private[this] lazy val controllers_ProductController_getByCategories4_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("categories")))
  )
  private[this] lazy val controllers_ProductController_getByCategories4_invoker = createInvoker(
    ProductController_1.getByCategories,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "getByCategories",
      Nil,
      "GET",
      this.prefix + """categories""",
      """""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_ProductController_handlePost5_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("handlepost")))
  )
  private[this] lazy val controllers_ProductController_handlePost5_invoker = createInvoker(
    ProductController_1.handlePost,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProductController",
      "handlePost",
      Nil,
      "POST",
      this.prefix + """handlepost""",
      """""",
      Seq()
    )
  )

  // @LINE:13
  private[this] lazy val controllers_Assets_versioned6_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_versioned6_invoker = createInvoker(
    Assets_0.versioned(fakeValue[String], fakeValue[Asset]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "versioned",
      Seq(classOf[String], classOf[Asset]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:6
    case controllers_ProductController_index0_route(params@_) =>
      call { 
        controllers_ProductController_index0_invoker.call(ProductController_1.index)
      }
  
    // @LINE:7
    case controllers_ProductController_addProduct1_route(params@_) =>
      call { 
        controllers_ProductController_addProduct1_invoker.call(ProductController_1.addProduct)
      }
  
    // @LINE:8
    case controllers_ProductController_getProducts2_route(params@_) =>
      call { 
        controllers_ProductController_getProducts2_invoker.call(ProductController_1.getProducts)
      }
  
    // @LINE:9
    case controllers_ProductController_getByCategory3_route(params@_) =>
      call(params.fromPath[Integer]("id", None)) { (id) =>
        controllers_ProductController_getByCategory3_invoker.call(ProductController_1.getByCategory(id))
      }
  
    // @LINE:10
    case controllers_ProductController_getByCategories4_route(params@_) =>
      call { 
        controllers_ProductController_getByCategories4_invoker.call(ProductController_1.getByCategories)
      }
  
    // @LINE:11
    case controllers_ProductController_handlePost5_route(params@_) =>
      call { 
        controllers_ProductController_handlePost5_invoker.call(ProductController_1.handlePost)
      }
  
    // @LINE:13
    case controllers_Assets_versioned6_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[Asset]("file", None)) { (path, file) =>
        controllers_Assets_versioned6_invoker.call(Assets_0.versioned(path, file))
      }
  }
}
