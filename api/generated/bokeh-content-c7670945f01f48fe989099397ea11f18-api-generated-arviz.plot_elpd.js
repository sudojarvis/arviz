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
    
      
      
    
      const element = document.getElementById("59ef50ac-e741-4066-891d-864e7bba52fd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '59ef50ac-e741-4066-891d-864e7bba52fd' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f8f6e673-0ff5-4dc6-ae31-59952b54aac9":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"17264"}],"tools":[{"id":"17254"},{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"}]},"id":"17292","type":"ProxyToolbar"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17281"},"group":null,"major_label_policy":{"id":"17282"},"ticker":{"id":"17251"}},"id":"17250","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17287"},"selection_policy":{"id":"17286"}},"id":"17274","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"17284"},"group":null,"major_label_policy":{"id":"17285"},"ticker":{"id":"17247"}},"id":"17246","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17277","type":"Title"},{"attributes":{"axis":{"id":"17250"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17253","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17263","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17246"},"coordinates":null,"group":null,"ticker":null},"id":"17249","type":"Grid"},{"attributes":{"children":[[{"id":"17237"},0,0]]},"id":"17291","type":"GridBox"},{"attributes":{"toolbar":{"id":"17292"},"toolbar_location":"above"},"id":"17293","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"17274"},"glyph":{"id":"17273"},"group":null,"hover_glyph":null,"view":{"id":"17276"}},"id":"17275","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17274"}},"id":"17276","type":"CDSView"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17273","type":"Scatter"},{"attributes":{},"id":"17251","type":"BasicTicker"},{"attributes":{"children":[{"id":"17293"},{"id":"17291"}]},"id":"17294","type":"Column"},{"attributes":{},"id":"17242","type":"LinearScale"},{"attributes":{"below":[{"id":"17246"}],"center":[{"id":"17249"},{"id":"17253"}],"height":288,"left":[{"id":"17250"}],"output_backend":"webgl","renderers":[{"id":"17275"}],"title":{"id":"17277"},"toolbar":{"id":"17264"},"toolbar_location":null,"width":432,"x_range":{"id":"17238"},"x_scale":{"id":"17242"},"y_range":{"id":"17240"},"y_scale":{"id":"17244"}},"id":"17237","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17247","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17262"}},"id":"17256","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"17263"}},"id":"17258","type":"LassoSelectTool"},{"attributes":{},"id":"17238","type":"DataRange1d"},{"attributes":{},"id":"17244","type":"LinearScale"},{"attributes":{},"id":"17257","type":"WheelZoomTool"},{"attributes":{},"id":"17255","type":"PanTool"},{"attributes":{"callback":null},"id":"17261","type":"HoverTool"},{"attributes":{},"id":"17260","type":"SaveTool"},{"attributes":{},"id":"17284","type":"BasicTickFormatter"},{"attributes":{},"id":"17281","type":"BasicTickFormatter"},{"attributes":{},"id":"17240","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17262","type":"BoxAnnotation"},{"attributes":{},"id":"17287","type":"Selection"},{"attributes":{"tools":[{"id":"17254"},{"id":"17255"},{"id":"17256"},{"id":"17257"},{"id":"17258"},{"id":"17259"},{"id":"17260"},{"id":"17261"}]},"id":"17264","type":"Toolbar"},{"attributes":{},"id":"17254","type":"ResetTool"},{"attributes":{},"id":"17286","type":"UnionRenderers"},{"attributes":{},"id":"17282","type":"AllLabels"},{"attributes":{},"id":"17285","type":"AllLabels"},{"attributes":{},"id":"17259","type":"UndoTool"}],"root_ids":["17294"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"f8f6e673-0ff5-4dc6-ae31-59952b54aac9","root_ids":["17294"],"roots":{"17294":"59ef50ac-e741-4066-891d-864e7bba52fd"}}];
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