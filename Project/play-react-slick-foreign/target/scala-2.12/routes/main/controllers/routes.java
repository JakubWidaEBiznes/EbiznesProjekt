// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jakub_wida/Documents/MagisterSem2/EBiznes/Projekt/Project/play-react-slick-foreign/conf/routes
// @DATE:Tue Jun 12 14:49:35 CEST 2018

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseProductController ProductController = new controllers.ReverseProductController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseProductController ProductController = new controllers.javascript.ReverseProductController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
