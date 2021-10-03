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
    
      
      
    
      const element = document.getElementById("fa813783-b769-431c-b0a0-b4968433ff69");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa813783-b769-431c-b0a0-b4968433ff69' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8ff7e36a-1c12-44ef-a0ea-87e65e94a6aa":{"defs":[],"roots":{"references":[{"attributes":{},"id":"23758","type":"UndoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23774","type":"Patch"},{"attributes":{"coordinates":null,"data_source":{"id":"23784"},"glyph":{"id":"23785"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23787"},"nonselection_glyph":{"id":"23786"},"view":{"id":"23789"}},"id":"23788","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[520]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[520]}},"selected":{"id":"23801"},"selection_policy":{"id":"23800"}},"id":"23772","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"23745"}],"center":[{"id":"23748"},{"id":"23752"}],"height":500,"left":[{"id":"23749"}],"output_backend":"webgl","renderers":[{"id":"23776"},{"id":"23782"},{"id":"23788"}],"title":{"id":"23792"},"toolbar":{"id":"23763"},"toolbar_location":null,"width":500,"x_range":{"id":"23790"},"x_scale":{"id":"23741"},"y_range":{"id":"23791"},"y_scale":{"id":"23743"}},"id":"23736","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"23749"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23752","type":"Grid"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23785","type":"Patch"},{"attributes":{},"id":"23803","type":"Selection"},{"attributes":{"source":{"id":"23784"}},"id":"23789","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"23798"},"group":null,"major_label_policy":{"id":"23799"},"ticker":{"id":"23746"}},"id":"23745","type":"LinearAxis"},{"attributes":{"callback":null},"id":"23760","type":"HoverTool"},{"attributes":{"children":[[{"id":"23736"},0,0]]},"id":"23809","type":"GridBox"},{"attributes":{},"id":"23800","type":"UnionRenderers"},{"attributes":{},"id":"23743","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23762","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23787","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23780","type":"Patch"},{"attributes":{"coordinates":null,"group":null},"id":"23792","type":"Title"},{"attributes":{},"id":"23756","type":"WheelZoomTool"},{"attributes":{},"id":"23795","type":"BasicTickFormatter"},{"attributes":{},"id":"23741","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"23778"},"glyph":{"id":"23779"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23781"},"nonselection_glyph":{"id":"23780"},"view":{"id":"23783"}},"id":"23782","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23772"}},"id":"23777","type":"CDSView"},{"attributes":{},"id":"23796","type":"AllLabels"},{"attributes":{},"id":"23805","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[312]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[312]}},"selected":{"id":"23803"},"selection_policy":{"id":"23802"}},"id":"23778","type":"ColumnDataSource"},{"attributes":{},"id":"23746","type":"BasicTicker"},{"attributes":{"coordinates":null,"formatter":{"id":"23795"},"group":null,"major_label_policy":{"id":"23796"},"ticker":{"id":"23750"}},"id":"23749","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"23763"}],"tools":[{"id":"23753"},{"id":"23754"},{"id":"23755"},{"id":"23756"},{"id":"23757"},{"id":"23758"},{"id":"23759"},{"id":"23760"}]},"id":"23810","type":"ProxyToolbar"},{"attributes":{"tools":[{"id":"23753"},{"id":"23754"},{"id":"23755"},{"id":"23756"},{"id":"23757"},{"id":"23758"},{"id":"23759"},{"id":"23760"}]},"id":"23763","type":"Toolbar"},{"attributes":{"overlay":{"id":"23761"}},"id":"23755","type":"BoxZoomTool"},{"attributes":{"end":6.167985444976804,"start":-2.626686037631406},"id":"23791","type":"Range1d"},{"attributes":{"end":6.821376341860156,"start":-3.2162755352502126},"id":"23790","type":"Range1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23786","type":"Patch"},{"attributes":{"toolbar":{"id":"23810"},"toolbar_location":"above"},"id":"23811","type":"ToolbarBox"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23779","type":"Patch"},{"attributes":{"axis":{"id":"23745"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23748","type":"Grid"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23781","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"aPswy4uz8D8YWe/rG4bwP/b1V4U3k/A/hAPn7MXT8D/YROrh5NfwP8xVO/pDOPE/kIed1Few8T8sr2/WgRfyP7Amq73wSfI/qUOfOvXw8j/QWvi/PVvzP8jC5E5dkfM/iB7gFi849D90BoGp+Z70Pw9d7pQs//Q/HLIJk7Xi9T90cUJ93Or1P+/jDO1e7vY/wF2SfHEm9z9cRqCrZfn3P2QJG2Ytavg/5qQLI6g5+T8MtaNP6a35P21+dG+x0vo/sGAsOaXx+j9YDLUiYTX8P6NUL+dHd/w//Lc9DB15/T9sj/sX4EH+P6BjxvXYvP4/pIenb0oAAEA1m5lUdmUAQHbda2QoogBASjMwWQZEAUAcifRN5OUBQIa0PCIbdQJA7d64QsKHAkDCNH03oCkDQJSKQSx+ywNAZuAFIVxtBEBPXLdXd6EEQDo2yhU6DwVADIyOChixBUDe4VL/9VIGQKxPXqVgegZAsjcX9NP0BkC6dcvkTEEHQISN2+ixlgdAXPA3AX3PB0CdSUIc3y0IQFjjn92POAhAz4B0EXlsCEAwPst8nYcIQITGd3HzhAhA/BBKj9VgCEBY45/djzgIQJHAxGzdLwhA3OJrwlgLCECG9wRK9eYHQMhckJyPswdAhI3b6LGWB0AVxdWA5W8HQEbGsg8pIgdAsjcX9NP0BkAfZ2rgr8kGQEOzmVx9YAZA3eFS//VSBkCt6EGJIeEFQAyMjgoYsQVAKpQEfO1YBUA6NsoVOg8FQB8SikTe0ARAZuAFIVxtBEC+TlCZ0D8EQJSKQSx+ywNAfnwDU16YA0DCNH03oCkDQKTM53s70gJA7t64QsKHAkAcifRN5OUBQEozMFkGRAFAveMAWPSyAEB23WtkKKIAQKSHp29KAABAoGPG9di8/j+m/gO++Fb+P/23PQwdef0/WAy1ImE1/D+wYCw5pfH6Pwy1o0/prfk/ZAkbZi1q+D/AXZJ8cSb3PxyyCZO14vU/+nN8oj5j9T90BoGp+Z70P8FmaJFXlvM/0Fr4vz1b8z9I9yvS6YPyPyyvb9aBF/I/nqds9oTo8T+gYYHfRlHxP6EioQGg7PA/hAPn7MXT8D9o+zDLi7PwPw==","dtype":"float64","order":"little","shape":[104]},"y":{"__ndarray__":"J0czr3eP+T+Qn5HsHKv6P/j37ynCxvs/y9h35CLR/D9gUE5nZ+L8P8iorKQM/v0/MAEL4rEZ/z/KhMNGYtj/P8ystI+rGgBAANljLn6oAEDA4ra4bQcBQDQFE81QNgFAaDHCayPEAUDJpYBcMA8CQJxdcQr2UQJAcdA/+hnbAkDQiSCpyN8CQAS2z0ebbQNAonExXnqNA0A44n7mbfsDQAhfIiLgMgRAag4uhUCJBEADCyYFNbMEQJ463SMTFwVABrmZUHQgBUCUh6zPdI4FQNJmjMLlpAVAVOxkKcD5BUAGkzthuDIGQMyJ0ZPHVAZAuxsxnFycBkA6v+r/isAGQOCKa16h1gZAbK3D0MkGB0ALnqWyUy8HQG7rmZ5dTgdA3f74lJVSB0Dh7JIcWWoHQIvIMP5mbQdAjPCNabhYB0Bu65meXU4HQCLHLIFGOAdAaBzTYwEUB0A3EMxx1NgGQDq/6v+KwAZAMGQqb7xsBkAGkzthuDIGQHQj+Xep4wVA0maMwuWkBUCeOt0jExcFQJY3IsBqBAVAag4uhUCJBEA44n7mbfsDQAS2z0ebbQNA0IkgqcjfAkDtvn1lZWwCQJxdcQr2UQJAaDHCayPEAUA0BRPNUDYBQADZYy5+qABA0MOMazZrAEDMrLSPqxoAQDABC+KxGf8/niXyJeOE/j/IqKykDP79P2FQTmdn4vw/PTwjEWTD/D/49+8pwsb7P5W1HpgZYfs/kJ+R7Byr+j+FkwH/Rgz6PyhHM693j/k/DP2rD5HK+D/A7tRx0nP4P/L/75Hkrfc/WJZ2NC1Y9z/MuxIHsbL2P/A9GPeHPPY/8ZDGL77a9T+K5bm54iD1P6AkRUVTgvQ/Io1bfD0F9D9RxtCLUPfzP+yTaQtMgfM/MS1RlLUL8z+6NP0+mOnyP3+Q2PV6n/I/WPP1wG5P8j/JFbCgwhnyP0igBLAD8fE/BX3Vek7t8T/Uo7SSiC/yP1YaugduqfI/ujT9Ppjp8j/1ZoSP4FXzPyKNW3w9BfQ/sokt4rk49D+K5bm54iD1P0tDv05p4fU/8D0Y94c89j9YlnY0LVj3P8Du1HHSc/g/Wo4Ps4vt+D8nRzOvd4/5Pw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"23805"},"selection_policy":{"id":"23804"}},"id":"23784","type":"ColumnDataSource"},{"attributes":{},"id":"23801","type":"Selection"},{"attributes":{},"id":"23750","type":"BasicTicker"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23773","type":"Patch"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23761","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"23762"}},"id":"23757","type":"LassoSelectTool"},{"attributes":{},"id":"23802","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23775","type":"Patch"},{"attributes":{},"id":"23799","type":"AllLabels"},{"attributes":{},"id":"23759","type":"SaveTool"},{"attributes":{"children":[{"id":"23811"},{"id":"23809"}]},"id":"23812","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"23772"},"glyph":{"id":"23773"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23775"},"nonselection_glyph":{"id":"23774"},"view":{"id":"23777"}},"id":"23776","type":"GlyphRenderer"},{"attributes":{},"id":"23754","type":"PanTool"},{"attributes":{"source":{"id":"23778"}},"id":"23783","type":"CDSView"},{"attributes":{},"id":"23804","type":"UnionRenderers"},{"attributes":{},"id":"23753","type":"ResetTool"},{"attributes":{},"id":"23798","type":"BasicTickFormatter"}],"root_ids":["23812"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"8ff7e36a-1c12-44ef-a0ea-87e65e94a6aa","root_ids":["23812"],"roots":{"23812":"fa813783-b769-431c-b0a0-b4968433ff69"}}];
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