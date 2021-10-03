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
    
      
      
    
      const element = document.getElementById("93dcb897-76c7-43e7-8b14-5ce181055dbf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93dcb897-76c7-43e7-8b14-5ce181055dbf' but no matching script tag was found.")
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
                    
                  const docs_json = '{"b55faf16-8f91-48e5-a931-faf07623f420":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20577","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"20550"},{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"}]},"id":"20560","type":"Toolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20583"},"selection_policy":{"id":"20582"}},"id":"20570","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"20588"},"toolbar_location":"above"},"id":"20589","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20558","type":"BoxAnnotation"},{"attributes":{},"id":"20578","type":"AllLabels"},{"attributes":{},"id":"20534","type":"DataRange1d"},{"attributes":{},"id":"20580","type":"BasicTickFormatter"},{"attributes":{},"id":"20550","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20570"},"glyph":{"id":"20569"},"group":null,"hover_glyph":null,"view":{"id":"20572"}},"id":"20571","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20580"},"group":null,"major_label_policy":{"id":"20581"},"ticker":{"id":"20543"}},"id":"20542","type":"LinearAxis"},{"attributes":{"overlay":{"id":"20558"}},"id":"20552","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"20542"}],"center":[{"id":"20545"},{"id":"20549"}],"height":288,"left":[{"id":"20546"}],"output_backend":"webgl","renderers":[{"id":"20571"}],"title":{"id":"20573"},"toolbar":{"id":"20560"},"toolbar_location":null,"width":432,"x_range":{"id":"20534"},"x_scale":{"id":"20538"},"y_range":{"id":"20536"},"y_scale":{"id":"20540"}},"id":"20533","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20559","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"20589"},{"id":"20587"}]},"id":"20590","type":"Column"},{"attributes":{},"id":"20543","type":"BasicTicker"},{"attributes":{},"id":"20556","type":"SaveTool"},{"attributes":{"children":[[{"id":"20533"},0,0]]},"id":"20587","type":"GridBox"},{"attributes":{},"id":"20540","type":"LinearScale"},{"attributes":{"axis":{"id":"20542"},"coordinates":null,"group":null,"ticker":null},"id":"20545","type":"Grid"},{"attributes":{},"id":"20547","type":"BasicTicker"},{"attributes":{},"id":"20582","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20557","type":"HoverTool"},{"attributes":{"overlay":{"id":"20559"}},"id":"20554","type":"LassoSelectTool"},{"attributes":{},"id":"20536","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20577"},"group":null,"major_label_policy":{"id":"20578"},"ticker":{"id":"20547"}},"id":"20546","type":"LinearAxis"},{"attributes":{},"id":"20551","type":"PanTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20569","type":"Scatter"},{"attributes":{"axis":{"id":"20546"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20549","type":"Grid"},{"attributes":{"source":{"id":"20570"}},"id":"20572","type":"CDSView"},{"attributes":{},"id":"20555","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"20560"}],"tools":[{"id":"20550"},{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"}]},"id":"20588","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20573","type":"Title"},{"attributes":{},"id":"20538","type":"LinearScale"},{"attributes":{},"id":"20583","type":"Selection"},{"attributes":{},"id":"20581","type":"AllLabels"},{"attributes":{},"id":"20553","type":"WheelZoomTool"}],"root_ids":["20590"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"b55faf16-8f91-48e5-a931-faf07623f420","root_ids":["20590"],"roots":{"20590":"93dcb897-76c7-43e7-8b14-5ce181055dbf"}}];
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