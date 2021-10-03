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
    
      
      
    
      const element = document.getElementById("03f49325-2adb-4217-96f6-6eba0a31402d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '03f49325-2adb-4217-96f6-6eba0a31402d' but no matching script tag was found.")
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
                    
                  const docs_json = '{"48851c6d-52b8-410b-b5f1-e682576d7806":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48064","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48009","type":"PolyAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48104"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48105"},"ticker":{"id":"47993"}},"id":"47992","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48066","type":"VBar"},{"attributes":{"source":{"id":"48058"}},"id":"48063","type":"CDSView"},{"attributes":{},"id":"48112","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48084"},"group":null,"major_label_policy":{"id":"48085"},"ticker":{"id":"48047"}},"id":"47962","type":"LinearAxis"},{"attributes":{},"id":"48113","type":"Selection"},{"attributes":{},"id":"47956","type":"LinearScale"},{"attributes":{"callback":null},"id":"48007","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48028","type":"VBar"},{"attributes":{"children":[[{"id":"47949"},0,0],[{"id":"47985"},0,1]]},"id":"48117","type":"GridBox"},{"attributes":{"axis":{"id":"47958"},"coordinates":null,"group":null,"ticker":null},"id":"47961","type":"Grid"},{"attributes":{},"id":"47959","type":"BasicTicker"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48101"},"group":null,"major_label_policy":{"id":"48102"},"ticker":{"id":"48079"}},"id":"47996","type":"LinearAxis"},{"attributes":{"source":{"id":"48026"}},"id":"48031","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48021","type":"VBar"},{"attributes":{"axis":{"id":"47962"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47965","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48049","type":"Title"},{"attributes":{"source":{"id":"48019"}},"id":"48024","type":"CDSView"},{"attributes":{},"id":"48000","type":"ResetTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48059","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48090"},"selection_policy":{"id":"48089"}},"id":"48019","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48032","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48019"},"glyph":{"id":"48020"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48022"},"nonselection_glyph":{"id":"48021"},"view":{"id":"48024"}},"id":"48023","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48022","type":"VBar"},{"attributes":{},"id":"47954","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48092"},"selection_policy":{"id":"48091"}},"id":"48026","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48071","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48027","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48034","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48051"},"glyph":{"id":"48052"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48054"},"nonselection_glyph":{"id":"48053"},"view":{"id":"48056"}},"id":"48055","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48054","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48026"},"glyph":{"id":"48027"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48029"},"nonselection_glyph":{"id":"48028"},"view":{"id":"48031"}},"id":"48030","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"48047","type":"FixedTicker"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48029","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48041","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48035","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48039","type":"Span"},{"attributes":{},"id":"47993","type":"BasicTicker"},{"attributes":{"ticks":[0,1,2,3]},"id":"48079","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48094"},"selection_policy":{"id":"48093"}},"id":"48033","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"47992"},"coordinates":null,"group":null,"ticker":null},"id":"47995","type":"Grid"},{"attributes":{"source":{"id":"48033"}},"id":"48038","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48033"},"glyph":{"id":"48034"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48036"},"nonselection_glyph":{"id":"48035"},"view":{"id":"48038"}},"id":"48037","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48060","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48036","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48052","type":"VBar"},{"attributes":{"below":[{"id":"47992"}],"center":[{"id":"47995"},{"id":"47999"},{"id":"48057"},{"id":"48064"},{"id":"48071"},{"id":"48078"}],"height":331,"left":[{"id":"47996"}],"output_backend":"webgl","renderers":[{"id":"48055"},{"id":"48062"},{"id":"48069"},{"id":"48076"}],"title":{"id":"48081"},"toolbar":{"id":"48010"},"toolbar_location":null,"width":496,"x_range":{"id":"47950"},"x_scale":{"id":"47988"},"y_range":{"id":"47952"},"y_scale":{"id":"47990"}},"id":"47985","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48042","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48087"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48088"},"ticker":{"id":"47959"}},"id":"47958","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48046","type":"Span"},{"attributes":{"axis":{"id":"47996"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47999","type":"Grid"},{"attributes":{"tools":[{"id":"48000"},{"id":"48001"},{"id":"48002"},{"id":"48003"},{"id":"48004"},{"id":"48005"},{"id":"48006"},{"id":"48007"}]},"id":"48010","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48096"},"selection_policy":{"id":"48095"}},"id":"48040","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48081","type":"Title"},{"attributes":{"source":{"id":"48040"}},"id":"48045","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48040"},"glyph":{"id":"48041"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48043"},"nonselection_glyph":{"id":"48042"},"view":{"id":"48045"}},"id":"48044","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48020","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48043","type":"VBar"},{"attributes":{"overlay":{"id":"48008"}},"id":"48002","type":"BoxZoomTool"},{"attributes":{},"id":"48001","type":"PanTool"},{"attributes":{"source":{"id":"48051"}},"id":"48056","type":"CDSView"},{"attributes":{},"id":"48006","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48053","type":"VBar"},{"attributes":{},"id":"48003","type":"WheelZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48107"},"selection_policy":{"id":"48106"}},"id":"48051","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"47958"}],"center":[{"id":"47961"},{"id":"47965"},{"id":"48025"},{"id":"48032"},{"id":"48039"},{"id":"48046"}],"height":331,"left":[{"id":"47962"}],"output_backend":"webgl","renderers":[{"id":"48023"},{"id":"48030"},{"id":"48037"},{"id":"48044"}],"title":{"id":"48049"},"toolbar":{"id":"47976"},"toolbar_location":null,"width":496,"x_range":{"id":"47950"},"x_scale":{"id":"47954"},"y_range":{"id":"47952"},"y_scale":{"id":"47956"}},"id":"47949","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"48009"}},"id":"48004","type":"LassoSelectTool"},{"attributes":{},"id":"48005","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48057","type":"Span"},{"attributes":{},"id":"48101","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48119"},{"id":"48117"}]},"id":"48120","type":"Column"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48061","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48058"},"glyph":{"id":"48059"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48061"},"nonselection_glyph":{"id":"48060"},"view":{"id":"48063"}},"id":"48062","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48008","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48109"},"selection_policy":{"id":"48108"}},"id":"48058","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48074","type":"VBar"},{"attributes":{},"id":"48102","type":"AllLabels"},{"attributes":{"toolbar":{"id":"48118"},"toolbar_location":"above"},"id":"48119","type":"ToolbarBox"},{"attributes":{},"id":"48089","type":"UnionRenderers"},{"attributes":{"source":{"id":"48065"}},"id":"48070","type":"CDSView"},{"attributes":{},"id":"48104","type":"BasicTickFormatter"},{"attributes":{},"id":"48090","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48073","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48065"},"glyph":{"id":"48066"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48068"},"nonselection_glyph":{"id":"48067"},"view":{"id":"48070"}},"id":"48069","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48078","type":"Span"},{"attributes":{},"id":"48105","type":"AllLabels"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48113"},"selection_policy":{"id":"48112"}},"id":"48072","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48072"}},"id":"48077","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48072"},"glyph":{"id":"48073"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48075"},"nonselection_glyph":{"id":"48074"},"view":{"id":"48077"}},"id":"48076","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48075","type":"VBar"},{"attributes":{"toolbars":[{"id":"47976"},{"id":"48010"}],"tools":[{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"},{"id":"47970"},{"id":"47971"},{"id":"47972"},{"id":"47973"},{"id":"48000"},{"id":"48001"},{"id":"48002"},{"id":"48003"},{"id":"48004"},{"id":"48005"},{"id":"48006"},{"id":"48007"}]},"id":"48118","type":"ProxyToolbar"},{"attributes":{"tools":[{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"},{"id":"47970"},{"id":"47971"},{"id":"47972"},{"id":"47973"}]},"id":"47976","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47975","type":"PolyAnnotation"},{"attributes":{},"id":"48091","type":"UnionRenderers"},{"attributes":{},"id":"48092","type":"Selection"},{"attributes":{"callback":null},"id":"47973","type":"HoverTool"},{"attributes":{"overlay":{"id":"47974"}},"id":"47968","type":"BoxZoomTool"},{"attributes":{},"id":"48106","type":"UnionRenderers"},{"attributes":{},"id":"47967","type":"PanTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48068","type":"VBar"},{"attributes":{},"id":"48107","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47974","type":"BoxAnnotation"},{"attributes":{},"id":"47972","type":"SaveTool"},{"attributes":{},"id":"47990","type":"LinearScale"},{"attributes":{},"id":"47966","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48025","type":"Span"},{"attributes":{},"id":"47950","type":"DataRange1d"},{"attributes":{},"id":"47971","type":"UndoTool"},{"attributes":{},"id":"48093","type":"UnionRenderers"},{"attributes":{},"id":"48094","type":"Selection"},{"attributes":{},"id":"48108","type":"UnionRenderers"},{"attributes":{},"id":"47988","type":"LinearScale"},{"attributes":{},"id":"48109","type":"Selection"},{"attributes":{},"id":"48084","type":"BasicTickFormatter"},{"attributes":{},"id":"47952","type":"DataRange1d"},{"attributes":{},"id":"48085","type":"AllLabels"},{"attributes":{},"id":"48087","type":"BasicTickFormatter"},{"attributes":{},"id":"48088","type":"AllLabels"},{"attributes":{},"id":"48095","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"47975"}},"id":"47970","type":"LassoSelectTool"},{"attributes":{},"id":"47969","type":"WheelZoomTool"},{"attributes":{},"id":"48096","type":"Selection"},{"attributes":{},"id":"48110","type":"UnionRenderers"},{"attributes":{},"id":"48111","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48111"},"selection_policy":{"id":"48110"}},"id":"48065","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48067","type":"VBar"}],"root_ids":["48120"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"48851c6d-52b8-410b-b5f1-e682576d7806","root_ids":["48120"],"roots":{"48120":"03f49325-2adb-4217-96f6-6eba0a31402d"}}];
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