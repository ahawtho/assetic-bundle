console.log("string asset for asset1.js");var Sayings;(function(Sayings){var Greeter=function(){function Greeter(message){this.greeting=message}Greeter.prototype.greet=function(){return"Hello, "+this.greeting};return Greeter}();Sayings.Greeter=Greeter})(Sayings||(Sayings={}));var greeter=new Sayings.Greeter("world");var button=document.createElement("button");button.innerText="Say Hello";button.onclick=function(){alert(greeter.greet())};document.body.appendChild(button);
//# sourceMappingURL=www.coursehero.com/sym-assets/composed.js.map