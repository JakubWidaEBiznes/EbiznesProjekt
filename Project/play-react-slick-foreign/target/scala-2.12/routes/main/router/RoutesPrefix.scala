// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jakub_wida/Documents/MagisterSem2/EBiznes/Projekt/Project/play-react-slick-foreign/conf/routes
// @DATE:Tue Jun 12 14:49:35 CEST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
