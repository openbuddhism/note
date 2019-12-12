function makeFootnote() {
      var inputEl = document.getElementById('main');
      // console.log(inputEl); 
      // console.log("no.1 : " + inputEl); 

      var outputEl = document.getElementById('main');
      // console.log(outputEl); 
      // console.log("no.3 : outputEl :" + outputEl);

      parse = function(){
            outputEl.innerHTML = parseMd(inputEl.innerHTML);
      };
      parse();

      function parseMd(inputEl){
      
      output_data = inputEl.replace(/[[\[]{1}[\^](\d*)[\]]+/g, 
      '<sup><a href="#footnote" rel="modal:open">$1</a></sup>');
      // console.log("no.2 : " + output_data);
      
      return output_data;
      }
};

window.onload = function() { makeFootnote(); };

let last_known_scroll_position = 0;
let ticking = false;
    
// window.addEventListener('scroll', function(e) {
//       last_known_scroll_position = window.scrollY;
//       if (!ticking) {
//         window.requestAnimationFrame(function() {
//           makeFootnote();
//           ticking = false;
//         });
//         ticking = true;
//       }
// });


window.addEventListener('hashchange', function(event) {
      console.log('oldURL : ' + event.oldURL);
      console.log('newURL : ' + event.newURL);
      window.requestAnimationFrame(function() {
            makeFootnote();
      });
});

// function locationHashChanged() {
//       if (location.hash === '#somecoolfeature') {
//           makeFootnote();
//       }
//     }
    
// window.addEventListener('hashchange', locationHashChanged);

// Dhamma<sup id="fnref:1"><a class="footnote-ref" href="#fn:1" rel="footnote-1">1</a></sup>

{/* 
<div class="footnote">
<hr />
<ol>
<li id="fn:1">
<p>Dhamma(m.드물게nt.&lt;√dhṛ)법,진리,이론(法)
<a class="footnote-backref" href="#fnref:1" id="footnote-1" >&#8617;</a></p>
</li>
</ol>
</div> 
*/}