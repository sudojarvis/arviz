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
    
      
      
    
      const element = document.getElementById("45029b9a-55d4-40e1-8e0d-037601d159f0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '45029b9a-55d4-40e1-8e0d-037601d159f0' but no matching script tag was found.")
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
                    
                  const docs_json = '{"3761ab5c-1110-4dc2-b432-a1e608740af5":{"defs":[],"roots":{"references":[{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18089","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18076"},"glyph":{"id":"18077"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18079"},"nonselection_glyph":{"id":"18078"},"view":{"id":"18081"}},"id":"18080","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"18057"}},"id":"18051","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18072","type":"Scatter"},{"attributes":{"callback":null},"id":"18056","type":"HoverTool"},{"attributes":{"children":[{"id":"18123"},{"id":"18121"}]},"id":"18124","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"18070"},"glyph":{"id":"18071"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18073"},"nonselection_glyph":{"id":"18072"},"view":{"id":"18075"}},"id":"18074","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18111"},"selection_policy":{"id":"18110"}},"id":"18076","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18117"},"selection_policy":{"id":"18116"}},"id":"18094","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18079","type":"MultiLine"},{"attributes":{},"id":"18107","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18097","type":"Circle"},{"attributes":{"overlay":{"id":"18058"}},"id":"18053","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18094"},"glyph":{"id":"18095"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18097"},"nonselection_glyph":{"id":"18096"},"view":{"id":"18099"}},"id":"18098","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18082"}},"id":"18087","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18082"},"glyph":{"id":"18083"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18085"},"nonselection_glyph":{"id":"18084"},"view":{"id":"18087"}},"id":"18086","type":"GlyphRenderer"},{"attributes":{},"id":"18042","type":"BasicTicker"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18100","type":"Span"},{"attributes":{},"id":"18037","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18083","type":"Circle"},{"attributes":{"source":{"id":"18088"}},"id":"18093","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18088"},"glyph":{"id":"18089"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18091"},"nonselection_glyph":{"id":"18090"},"view":{"id":"18093"}},"id":"18092","type":"GlyphRenderer"},{"attributes":{},"id":"18110","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18084","type":"Circle"},{"attributes":{},"id":"18049","type":"ResetTool"},{"attributes":{"source":{"id":"18076"}},"id":"18081","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"18103"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18104"},"ticker":{"id":"18068"}},"id":"18045","type":"LinearAxis"},{"attributes":{},"id":"18116","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"18049"},{"id":"18050"},{"id":"18051"},{"id":"18052"},{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"}]},"id":"18059","type":"Toolbar"},{"attributes":{},"id":"18052","type":"WheelZoomTool"},{"attributes":{},"id":"18104","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18057","type":"BoxAnnotation"},{"attributes":{},"id":"18114","type":"UnionRenderers"},{"attributes":{},"id":"18108","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18113"},"selection_policy":{"id":"18112"}},"id":"18082","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18058","type":"PolyAnnotation"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18068","type":"FixedTicker"},{"attributes":{},"id":"18111","type":"Selection"},{"attributes":{},"id":"18050","type":"PanTool"},{"attributes":{"coordinates":null,"group":null},"id":"18101","type":"Title"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18071","type":"Scatter"},{"attributes":{},"id":"18055","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18085","type":"Circle"},{"attributes":{},"id":"18109","type":"Selection"},{"attributes":{"axis":{"id":"18045"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18048","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18096","type":"Circle"},{"attributes":{},"id":"18033","type":"DataRange1d"},{"attributes":{"children":[[{"id":"18032"},0,0]]},"id":"18121","type":"GridBox"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18078","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18073","type":"Scatter"},{"attributes":{"source":{"id":"18094"}},"id":"18099","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18109"},"selection_policy":{"id":"18108"}},"id":"18070","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18070"}},"id":"18075","type":"CDSView"},{"attributes":{"below":[{"id":"18041"}],"center":[{"id":"18044"},{"id":"18048"}],"height":500,"left":[{"id":"18045"}],"output_backend":"webgl","renderers":[{"id":"18074"},{"id":"18080"},{"id":"18086"},{"id":"18092"},{"id":"18098"},{"id":"18100"}],"title":{"id":"18101"},"toolbar":{"id":"18059"},"toolbar_location":null,"width":500,"x_range":{"id":"18033"},"x_scale":{"id":"18037"},"y_range":{"id":"18035"},"y_scale":{"id":"18039"}},"id":"18032","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18113","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18090","type":"MultiLine"},{"attributes":{},"id":"18115","type":"Selection"},{"attributes":{},"id":"18106","type":"BasicTickFormatter"},{"attributes":{},"id":"18112","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"18035","type":"DataRange1d"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18106"},"group":null,"major_label_policy":{"id":"18107"},"ticker":{"id":"18042"}},"id":"18041","type":"LinearAxis"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18115"},"selection_policy":{"id":"18114"}},"id":"18088","type":"ColumnDataSource"},{"attributes":{},"id":"18117","type":"Selection"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18077","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18091","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"18059"}],"tools":[{"id":"18049"},{"id":"18050"},{"id":"18051"},{"id":"18052"},{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"}]},"id":"18122","type":"ProxyToolbar"},{"attributes":{},"id":"18039","type":"LinearScale"},{"attributes":{},"id":"18054","type":"UndoTool"},{"attributes":{"axis":{"id":"18041"},"coordinates":null,"group":null,"ticker":null},"id":"18044","type":"Grid"},{"attributes":{"toolbar":{"id":"18122"},"toolbar_location":"above"},"id":"18123","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18095","type":"Circle"},{"attributes":{},"id":"18103","type":"BasicTickFormatter"}],"root_ids":["18124"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"3761ab5c-1110-4dc2-b432-a1e608740af5","root_ids":["18124"],"roots":{"18124":"45029b9a-55d4-40e1-8e0d-037601d159f0"}}];
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