// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jakub_wida/Documents/MagisterSem2/EBiznes/Projekt/Project/play-react-slick-foreign/conf/routes
// @DATE:Tue Jun 12 14:49:35 CEST 2018

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers {

  // @LINE:6
  class ReverseProductController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def getProducts(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "products")
    }
  
    // @LINE:10
    def getByCategories(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "categories")
    }
  
    // @LINE:11
    def handlePost(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "handlepost")
    }
  
    // @LINE:7
    def addProduct(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "addproduct")
    }
  
    // @LINE:9
    def getByCategory(id:Integer): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "category/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[Integer]].unbind("id", id)))
    }
  
    // @LINE:6
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
  }

  // @LINE:13
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:13
    def versioned(file:Asset): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[Asset]].unbind("file", file))
    }
  
  }


}
