(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("ccbc468e-91bb-4f08-b65c-19f621eb0e99");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ccbc468e-91bb-4f08-b65c-19f621eb0e99' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"8d3519c7-0c3f-4d53-a783-5e208dee2335":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20909"},"selection_policy":{"id":"20908"}},"id":"20879","type":"ColumnDataSource"},{"attributes":{},"id":"20851","type":"WheelZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20874","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20867"},"glyph":{"id":"20868"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20870"},"nonselection_glyph":{"id":"20869"},"view":{"id":"20872"}},"id":"20871","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"20858"}],"tools":[{"id":"20848"},{"id":"20849"},{"id":"20850"},{"id":"20851"},{"id":"20852"},{"id":"20853"},{"id":"20854"},{"id":"20855"}]},"id":"20916","type":"ProxyToolbar"},{"attributes":{},"id":"20836","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20905"},"selection_policy":{"id":"20904"}},"id":"20867","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20895","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20869","type":"Circle"},{"attributes":{"source":{"id":"20873"}},"id":"20878","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20887","type":"Circle"},{"attributes":{"callback":null},"id":"20855","type":"HoverTool"},{"attributes":{},"id":"20899","type":"BasicTickFormatter"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20893"},{"id":"20894"}],"location":"center_right","orientation":"horizontal"},"id":"20892","type":"Legend"},{"attributes":{"coordinates":null,"data_source":{"id":"20885"},"glyph":{"id":"20886"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20888"},"nonselection_glyph":{"id":"20887"},"view":{"id":"20890"}},"id":"20889","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20891","type":"Span"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20889"},{"id":"20883"}]},"id":"20894","type":"LegendItem"},{"attributes":{},"id":"20909","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20870","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20911"},"selection_policy":{"id":"20910"}},"id":"20885","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20917"},{"id":"20915"}]},"id":"20918","type":"Column"},{"attributes":{"source":{"id":"20885"}},"id":"20890","type":"CDSView"},{"attributes":{},"id":"20854","type":"SaveTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20856","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20868","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20876","type":"Line"},{"attributes":{},"id":"20910","type":"UnionRenderers"},{"attributes":{},"id":"20849","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20907"},"selection_policy":{"id":"20906"}},"id":"20873","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"20892"}],"below":[{"id":"20840"}],"center":[{"id":"20843"},{"id":"20847"}],"height":500,"left":[{"id":"20844"}],"output_backend":"webgl","renderers":[{"id":"20871"},{"id":"20877"},{"id":"20883"},{"id":"20889"},{"id":"20891"}],"title":{"id":"20895"},"toolbar":{"id":"20858"},"toolbar_location":null,"width":500,"x_range":{"id":"20832"},"x_scale":{"id":"20836"},"y_range":{"id":"20834"},"y_scale":{"id":"20838"}},"id":"20831","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20911","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20882","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20888","type":"Circle"},{"attributes":{},"id":"20900","type":"AllLabels"},{"attributes":{"overlay":{"id":"20856"}},"id":"20850","type":"BoxZoomTool"},{"attributes":{"source":{"id":"20867"}},"id":"20872","type":"CDSView"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20871"},{"id":"20877"}]},"id":"20893","type":"LegendItem"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20902"},"group":null,"major_label_policy":{"id":"20903"},"ticker":{"id":"20841"}},"id":"20840","type":"LinearAxis"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20880","type":"Line"},{"attributes":{},"id":"20834","type":"DataRange1d"},{"attributes":{},"id":"20845","type":"BasicTicker"},{"attributes":{},"id":"20838","type":"LinearScale"},{"attributes":{},"id":"20904","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20875","type":"Line"},{"attributes":{},"id":"20905","type":"Selection"},{"attributes":{"axis":{"id":"20844"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20847","type":"Grid"},{"attributes":{},"id":"20841","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"20916"},"toolbar_location":"above"},"id":"20917","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"20848"},{"id":"20849"},{"id":"20850"},{"id":"20851"},{"id":"20852"},{"id":"20853"},{"id":"20854"},{"id":"20855"}]},"id":"20858","type":"Toolbar"},{"attributes":{},"id":"20853","type":"UndoTool"},{"attributes":{},"id":"20903","type":"AllLabels"},{"attributes":{},"id":"20906","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20899"},"group":null,"major_label_policy":{"id":"20900"},"ticker":{"id":"20845"}},"id":"20844","type":"LinearAxis"},{"attributes":{},"id":"20848","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20873"},"glyph":{"id":"20874"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20876"},"nonselection_glyph":{"id":"20875"},"view":{"id":"20878"}},"id":"20877","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20840"},"coordinates":null,"group":null,"ticker":null},"id":"20843","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20857","type":"PolyAnnotation"},{"attributes":{},"id":"20907","type":"Selection"},{"attributes":{},"id":"20832","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20886","type":"Circle"},{"attributes":{"source":{"id":"20879"}},"id":"20884","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20879"},"glyph":{"id":"20880"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20882"},"nonselection_glyph":{"id":"20881"},"view":{"id":"20884"}},"id":"20883","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20857"}},"id":"20852","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"20831"},0,0]]},"id":"20915","type":"GridBox"},{"attributes":{},"id":"20902","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20881","type":"Line"},{"attributes":{},"id":"20908","type":"UnionRenderers"}],"root_ids":["20918"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"8d3519c7-0c3f-4d53-a783-5e208dee2335","root_ids":["20918"],"roots":{"20918":"ccbc468e-91bb-4f08-b65c-19f621eb0e99"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();