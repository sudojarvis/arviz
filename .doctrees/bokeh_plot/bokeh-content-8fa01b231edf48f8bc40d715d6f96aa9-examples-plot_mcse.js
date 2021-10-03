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
    
      
      
    
      const element = document.getElementById("fbcba2df-03c6-4d7f-8750-12fe9fc56a72");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbcba2df-03c6-4d7f-8750-12fe9fc56a72' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f935e685-89e1-4b48-9474-95fd91e7e4ec":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"41681"},0,0],[{"id":"41717"},0,1]]},"id":"41811","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41774","type":"Span"},{"attributes":{},"id":"41788","type":"BasicTickFormatter"},{"attributes":{},"id":"41806","type":"UnionRenderers"},{"attributes":{},"id":"41807","type":"Selection"},{"attributes":{},"id":"41789","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41775","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41785"},"group":null,"major_label_policy":{"id":"41786"},"ticker":{"id":"41695"}},"id":"41694","type":"LinearAxis"},{"attributes":{},"id":"41691","type":"BasicTicker"},{"attributes":{"source":{"id":"41763"}},"id":"41765","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"41753"},"glyph":{"id":"41754"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41756"},"nonselection_glyph":{"id":"41755"},"view":{"id":"41758"}},"id":"41757","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41788"},"group":null,"major_label_policy":{"id":"41789"},"ticker":{"id":"41691"}},"id":"41690","type":"LinearAxis"},{"attributes":{},"id":"41790","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41802"},"group":null,"major_label_policy":{"id":"41803"},"ticker":{"id":"41727"}},"id":"41726","type":"LinearAxis"},{"attributes":{"source":{"id":"41753"}},"id":"41758","type":"CDSView"},{"attributes":{},"id":"41688","type":"LinearScale"},{"attributes":{},"id":"41791","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41759","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41762","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41760","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41766","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41805"},"selection_policy":{"id":"41804"}},"id":"41768","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41761","type":"Span"},{"attributes":{"overlay":{"id":"41707"}},"id":"41702","type":"LassoSelectTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41793"},"selection_policy":{"id":"41792"}},"id":"41763","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41763"},"glyph":{"id":"41762"},"group":null,"hover_glyph":null,"view":{"id":"41765"}},"id":"41764","type":"GlyphRenderer"},{"attributes":{},"id":"41731","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41781","type":"Title"},{"attributes":{"end":1,"start":-0.05},"id":"41720","type":"DataRange1d"},{"attributes":{"source":{"id":"41778"}},"id":"41780","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41799"},"group":null,"major_label_policy":{"id":"41800"},"ticker":{"id":"41731"}},"id":"41730","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"41708"},{"id":"41744"}],"tools":[{"id":"41698"},{"id":"41699"},{"id":"41700"},{"id":"41701"},{"id":"41702"},{"id":"41703"},{"id":"41704"},{"id":"41705"},{"id":"41734"},{"id":"41735"},{"id":"41736"},{"id":"41737"},{"id":"41738"},{"id":"41739"},{"id":"41740"},{"id":"41741"}]},"id":"41812","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"41690"},"coordinates":null,"group":null,"ticker":null},"id":"41693","type":"Grid"},{"attributes":{},"id":"41722","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41807"},"selection_policy":{"id":"41806"}},"id":"41778","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41778"},"glyph":{"id":"41777"},"group":null,"hover_glyph":null,"view":{"id":"41780"}},"id":"41779","type":"GlyphRenderer"},{"attributes":{},"id":"41792","type":"UnionRenderers"},{"attributes":{},"id":"41703","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41755","type":"Circle"},{"attributes":{},"id":"41724","type":"LinearScale"},{"attributes":{},"id":"41793","type":"Selection"},{"attributes":{"callback":null},"id":"41741","type":"HoverTool"},{"attributes":{"toolbar":{"id":"41812"},"toolbar_location":"above"},"id":"41813","type":"ToolbarBox"},{"attributes":{},"id":"41727","type":"BasicTicker"},{"attributes":{"axis":{"id":"41726"},"coordinates":null,"group":null,"ticker":null},"id":"41729","type":"Grid"},{"attributes":{"axis":{"id":"41694"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41697","type":"Grid"},{"attributes":{},"id":"41799","type":"BasicTickFormatter"},{"attributes":{},"id":"41800","type":"AllLabels"},{"attributes":{},"id":"41718","type":"DataRange1d"},{"attributes":{"axis":{"id":"41730"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41733","type":"Grid"},{"attributes":{},"id":"41802","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"41706"}},"id":"41700","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41756","type":"Circle"},{"attributes":{"overlay":{"id":"41742"}},"id":"41736","type":"BoxZoomTool"},{"attributes":{},"id":"41803","type":"AllLabels"},{"attributes":{},"id":"41735","type":"PanTool"},{"attributes":{},"id":"41734","type":"ResetTool"},{"attributes":{},"id":"41699","type":"PanTool"},{"attributes":{},"id":"41740","type":"SaveTool"},{"attributes":{"children":[{"id":"41813"},{"id":"41811"}]},"id":"41814","type":"Column"},{"attributes":{},"id":"41737","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41776","type":"Span"},{"attributes":{"overlay":{"id":"41743"}},"id":"41738","type":"LassoSelectTool"},{"attributes":{},"id":"41698","type":"ResetTool"},{"attributes":{},"id":"41739","type":"UndoTool"},{"attributes":{"tools":[{"id":"41734"},{"id":"41735"},{"id":"41736"},{"id":"41737"},{"id":"41738"},{"id":"41739"},{"id":"41740"},{"id":"41741"}]},"id":"41744","type":"Toolbar"},{"attributes":{},"id":"41704","type":"SaveTool"},{"attributes":{},"id":"41804","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41742","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"41705","type":"HoverTool"},{"attributes":{},"id":"41805","type":"Selection"},{"attributes":{},"id":"41701","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41743","type":"PolyAnnotation"},{"attributes":{},"id":"41686","type":"LinearScale"},{"attributes":{"below":[{"id":"41690"}],"center":[{"id":"41693"},{"id":"41697"}],"height":500,"left":[{"id":"41694"}],"output_backend":"webgl","renderers":[{"id":"41757"},{"id":"41759"},{"id":"41760"},{"id":"41761"},{"id":"41764"}],"title":{"id":"41766"},"toolbar":{"id":"41708"},"toolbar_location":null,"width":500,"x_range":{"id":"41682"},"x_scale":{"id":"41686"},"y_range":{"id":"41684"},"y_scale":{"id":"41688"}},"id":"41681","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41754","type":"Circle"},{"attributes":{},"id":"41695","type":"BasicTicker"},{"attributes":{"source":{"id":"41768"}},"id":"41773","type":"CDSView"},{"attributes":{},"id":"41682","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"41768"},"glyph":{"id":"41769"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41771"},"nonselection_glyph":{"id":"41770"},"view":{"id":"41773"}},"id":"41772","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"41698"},{"id":"41699"},{"id":"41700"},{"id":"41701"},{"id":"41702"},{"id":"41703"},{"id":"41704"},{"id":"41705"}]},"id":"41708","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41791"},"selection_policy":{"id":"41790"}},"id":"41753","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41777","type":"Scatter"},{"attributes":{"below":[{"id":"41726"}],"center":[{"id":"41729"},{"id":"41733"}],"height":500,"left":[{"id":"41730"}],"output_backend":"webgl","renderers":[{"id":"41772"},{"id":"41774"},{"id":"41775"},{"id":"41776"},{"id":"41779"}],"title":{"id":"41781"},"toolbar":{"id":"41744"},"toolbar_location":null,"width":500,"x_range":{"id":"41718"},"x_scale":{"id":"41722"},"y_range":{"id":"41720"},"y_scale":{"id":"41724"}},"id":"41717","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41706","type":"BoxAnnotation"},{"attributes":{},"id":"41785","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41771","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"41684","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41770","type":"Circle"},{"attributes":{},"id":"41786","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41769","type":"Circle"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41707","type":"PolyAnnotation"}],"root_ids":["41814"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"f935e685-89e1-4b48-9474-95fd91e7e4ec","root_ids":["41814"],"roots":{"41814":"fbcba2df-03c6-4d7f-8750-12fe9fc56a72"}}];
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