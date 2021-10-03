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
    
      
      
    
      const element = document.getElementById("d87f6db3-8e98-4abb-a28b-2f6d1134775d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd87f6db3-8e98-4abb-a28b-2f6d1134775d' but no matching script tag was found.")
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
                    
                  const docs_json = '{"04f38d1a-a805-4df4-9ba0-ba3d9a04ef64":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21127","type":"WheelZoomTool"},{"attributes":{},"id":"21159","type":"UnionRenderers"},{"attributes":{"axis":{"id":"21120"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21123","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21132","type":"BoxAnnotation"},{"attributes":{},"id":"21117","type":"BasicTicker"},{"attributes":{},"id":"21130","type":"SaveTool"},{"attributes":{},"id":"21114","type":"LinearScale"},{"attributes":{},"id":"21129","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21143"},"glyph":{"id":"21144"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21146"},"nonselection_glyph":{"id":"21145"},"view":{"id":"21148"}},"id":"21147","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"21124"},{"id":"21125"},{"id":"21126"},{"id":"21127"},{"id":"21128"},{"id":"21129"},{"id":"21130"},{"id":"21131"}]},"id":"21134","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21160"},"selection_policy":{"id":"21159"}},"id":"21143","type":"ColumnDataSource"},{"attributes":{},"id":"21112","type":"LinearScale"},{"attributes":{"axis":{"id":"21116"},"coordinates":null,"group":null,"ticker":null},"id":"21119","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21145","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21149","type":"Span"},{"attributes":{},"id":"21125","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21146","type":"Circle"},{"attributes":{"overlay":{"id":"21132"}},"id":"21126","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"21165"},"toolbar_location":"above"},"id":"21166","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21157"},"group":null,"major_label_policy":{"id":"21158"},"ticker":{"id":"21117"}},"id":"21116","type":"LinearAxis"},{"attributes":{"overlay":{"id":"21133"}},"id":"21128","type":"LassoSelectTool"},{"attributes":{},"id":"21160","type":"Selection"},{"attributes":{},"id":"21124","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21150","type":"Title"},{"attributes":{},"id":"21108","type":"DataRange1d"},{"attributes":{"below":[{"id":"21116"}],"center":[{"id":"21119"},{"id":"21123"}],"height":500,"left":[{"id":"21120"}],"output_backend":"webgl","renderers":[{"id":"21147"},{"id":"21149"}],"title":{"id":"21150"},"toolbar":{"id":"21134"},"toolbar_location":null,"width":500,"x_range":{"id":"21108"},"x_scale":{"id":"21112"},"y_range":{"id":"21110"},"y_scale":{"id":"21114"}},"id":"21107","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21157","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"21143"}},"id":"21148","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21144","type":"Circle"},{"attributes":{},"id":"21154","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"21134"}],"tools":[{"id":"21124"},{"id":"21125"},{"id":"21126"},{"id":"21127"},{"id":"21128"},{"id":"21129"},{"id":"21130"},{"id":"21131"}]},"id":"21165","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21154"},"group":null,"major_label_policy":{"id":"21155"},"ticker":{"id":"21121"}},"id":"21120","type":"LinearAxis"},{"attributes":{},"id":"21110","type":"DataRange1d"},{"attributes":{},"id":"21158","type":"AllLabels"},{"attributes":{},"id":"21155","type":"AllLabels"},{"attributes":{"children":[[{"id":"21107"},0,0]]},"id":"21164","type":"GridBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21133","type":"PolyAnnotation"},{"attributes":{},"id":"21121","type":"BasicTicker"},{"attributes":{"children":[{"id":"21166"},{"id":"21164"}]},"id":"21167","type":"Column"},{"attributes":{"callback":null},"id":"21131","type":"HoverTool"}],"root_ids":["21167"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"04f38d1a-a805-4df4-9ba0-ba3d9a04ef64","root_ids":["21167"],"roots":{"21167":"d87f6db3-8e98-4abb-a28b-2f6d1134775d"}}];
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