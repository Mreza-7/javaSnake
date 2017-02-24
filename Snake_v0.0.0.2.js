/*
 *	In The Name Of God
 *	javaSnake > JavaScript
 *	By SMRSAN
 *	
 *	WebLog:
 *			http://smrsan.blogfa.com/
 *	WebSite:
 *			http://www.javaSnake.com/
 */
//Start Of javaSnake In Function Mode
var javaSnake = (function(slct, index){
	
	//javaSnake Main Variables
	/*var JS_MAIN_Something....
	*/
	
	//Main SELECTOR Funciton
	"use strict";
	return  function(slct, index){
		
		/*DANGER*/
		var S = []; /*Main Variable For Functions & Matched Elements !!!*/
		
		if(typeof slct === 'string'){
			
			var slct2 = slct.toLowerCase();
			
			if(slct2.search(/^(\s*[\$])/) === -1){
				
				var temp = document.querySelectorAll(slct);//Using Temp For Read-Only Properties
				for(var i=0; i<temp.length; i++){ S.push(temp[i]); }//Make Them ReWritable !!!
				
			} else {
				
				/*
				 *	Commands Of 'SELECTOR'() Function !
				 */
				
				switch(slct2.replace(/([\s]+(?=[\S]+))|([\s]+(?![\S]+))/gim,'')){
					
					case '$ajax':
						
						S.push(readyAjax_());
						
						// Ajax Functions //
						
						S.getAjax = function(){ return S[0]; };
						S.open = function(type,url,sync){
							
							if(typeof type === 'string' && typeof url === 'string' && typeof sync === 'boolean'){
								
								S[0].open(type,url,sync);
								return S;//Continue Developing
								
							} else {
								
								window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf open() Function Arguments Are Wrong !");
								
							}
							
						};
						S.get = function(url,sync){
							
							if(typeof url === 'string' && typeof sync === 'boolean'){
								
								S[0].open("GET",url,sync);
								return S;//Continue Developing
								
							} else {
								
								window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf get() Function Argument(s) Are Wrong !");
								
							}
							
						};
						S.post = function(url,sync){
							
							
							if(typeof url === 'string' && typeof sync === 'boolean'){
								
								S[0].open("POST",url,sync);
								return S;//Continue Developing
								
							} else {
								
								window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf post() Function Arguments Are Wrong !");
							}
							
						};
						S.send = function(values){
							
							if(values === undefined){
								
								S[0].send();
								
							} else {
								if(typeof values === 'string'){
									
									S[0].send(values);
									
								} else {
									
									window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut String Value In send() Function !");
									
								}
							}
							return S;//Continue Developing
							
						};
						S.readyChange = function(func){
							
							if(typeof func === 'function'){
								S[0].onreadystatechange = func;
								return S;//Continue Developing
							} else {
								
								window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut A Function Value In readyChange() Function !");
								
							}
							
						};
						S.isDone = function(){
							
							return (S[0].readyState === (XMLHttpRequest.DONE || ActiveXObject.DONE));
							
						};
						S.reqHead = function(property,value){
							
							if(typeof property === 'string' && typeof value === 'string'){
								
								S[0].setRequestHeader(property,value);
								
							} else {
								
								window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut String Values In Both Arguments Of reqHead() Function !");
								
							}
							
						};
						S.readyState = function(){
							
							return S[0].readyState;
							
						};
						S.status = function(){
							
							return S[0].status;
							
						};
						S.statusTxt = function(){
							
							return S[0].statusText;
							
						};
						S.respTxt = function(){
							
							return S[0].responseText;
							
						};
						S.respXml = function(){
							
							return S[0].responseXML;
							
						};
						//End Of Ajax Functions
						
					return S; //End Of {$ajax} Command
					case '$about':
					return {
						creator          : "SMRSAN",
						webLog           : "http://smrsan.blogfa.com/",
						webSite          : ["http://www.javaSnake.com/","http:/www.javaSnake.org/","http://www.javaSnake.ir/"],
						version          : "v0.0.1",
						firstPublishDate : "1395 | 2016",
						publishDate      : "1395 | 2016"
					}; //End Of {$about} Command
					case '$arr':
					return []; //End Of {$arr} Command
					case '$obj':
					return {}; //End Of {$obj} Command
					case '$reg':
					return new RegExp((index !== undefined)? index:null); //End Of {$reg} Command
					case '$new':
						
						if(typeof index === 'string'){
							
							try{
								
								return document.createElement(index);
								
							} catch(e) {
								
								window.javaSnake.error("javaSnake_S_{$new}: Enter A Valid String For Name Of New Element In The Second Argument Of 'SELECTOR'() Function !");
								
							}
							
						} else if(typeof index === 'object'){
							
							try{
								
								return index.cloneNode(true);
								
							} catch(e) {
								
								window.javaSnake.error("javaSnake_S_{$new}: The Object That You Put In The Second Argument Of 'SELECTOR'() Function\nWas Not A DOMObject !");
								
							}
							
						} else {
							
							window.javaSnake.error("javaSnake_S_{$new}: Put String/DOMObject In The Second Argument Of 'SELECTOR'() Function !");
							
						}
						
					break; //End Of {$new} Command
					//***************Develop It !***************
					//You Can Also Make Your Own Commands Here !
					
				}
				
			}
			
		} else if(slct.length){ //If General Array//
			
			for(var i=0; i<slct.length; i++){ //Selects Elements In General Array
				
				if(typeof slct[i] === 'string'){ //If String In General Array
					
					var slctTemp = "";
						slctTemp += slct[i];
					
					if(i === (slct.length-1) && slct.length > 1 && slctTemp.search(/[$\$]/) !== -1){
						slct[i] = slct[i].toLowerCase();
						switch (slct[i]){
							case '$odd':
								var temp = [];
								for(var j=0; j<S.length; j++){
									if(j === 0 || j%2 === 0){
										temp.push(S[j]);
									}
								}
								S = temp;
							break;
							case '$even':
								var temp = [];
								for(var j=0; j<S.length; j++){
									if(j === 1 || j%2 !== 0){
										temp.push(S[j]);
									}
								}
								S = temp;
							break;
							case '$first':
								S = [S[0]];
							break;
							case '$last':
								S = [S[S.length-1]];
							break;
							default:
								window.javaSnake.error("javaSnake_S: The Command That You Entered,\n[" + slct[i] + "] Was Invalid !");
							break;
						}
					} else {
						var temp = document.querySelectorAll(slct[i]);
						for(var j=0; j<temp.length; j++){
							S.push(temp[j]);
						}
					}
					
				} else if(slct[i].length){ //If Array In General Array
					
					var elems = [];
						
					for(var j=0; j<slct[i].length; j++){ //Each Selects
					
						var selects = slct[i][j];
						
						if(j === (slct[i].length-1) && slct[i].length > 1){
							
							if(typeof selects === 'string'){ //If Ender String
								
								var selects_Temp = "";
									selects_Temp += selects;
								
								if(selects_Temp.search(/[$\$]/) !== -1){//If An Ender Command
									selects = selects.toLowerCase();
									switch (selects){
										case "$odd":
											var temp = [];
											for(var k=0; k<elems.length; k++){
												if(k === 0 || k%2 === 0){
													temp.push(elems[k]);
												}
											}
											elems = temp;
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$even":
											var temp = [];
											for(var k=0; k<elems.length; k++){
												if(k === 1 || k%2 !== 0){
													temp.push(elems[k]);
												}
											}
											elems = temp;
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$first":
											elems = [elems[0]];
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$last":
											elems = [elems[elems.length-1]];
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										default:
											window.javaSnake.error("javaSnake_S: The Command That You Entered,\n[" + selects + "] Was Invalid !");
										break;
									}
								} else {
									
									//Just Selects That
									selects = document.querySelectorAll(selects);
									for(var k=0; k<selects.length; k++){
										elems.push(selects[k]);
									}
									for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
									
								}
								
							} else if(typeof selects === 'object'){ //If Ender Object
								elems.push(selects);
								for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
							} else if(typeof selects === 'number'){ //If Ender Number
								S.push(elems[selects]); //Push Elements In S
							}
						} else {
							//Push Selected Elements From Inner Array Selectors
							if(typeof selects === 'string'){
								var temp = document.querySelectorAll(selects);
								for(var k=0; k<temp.length; k++){
									if(slct[i].length > 1) elems.push(temp[k]);
									else S.push(temp[k]);
								}
							} else if(selects.length){
								for(var k=0; k<selects.length; k++){
									if(slct[i].length > 1) elems.push(selects[k]);
									else S.push(selects[k]);
								}
							} else if(typeof selects === 'object'){
								if(slct[i].length > 1) elems.push(selects);
								else S.push(selects);
							}
						}
						
					}
					
				} else if(typeof slct[i] === 'object'){ //If Object In General Array
					S.push(slct[i]);
				} else {
					S = [S[Number(slct[i])]];
				}
				
			}
			
		} else if(typeof slct === 'function'){
			
			window.javaSnake.addEvent(slct, "load", window, false);
			
		} else if(typeof slct === 'object'){
			
			//DANGER > DO NOT MODIFY HERE !!!
			//  IF YOU LOST BETWEEN CODES !!!
			
			if(slct.setRequestHeader){ //This Is An Ajax Object > AJAX Object Mode
				
				S = [slct];
						
				// Ajax Functions //
				
				S.getAjax = function(){ return S[0]; };
				S.open = function(type,url,sync){
					
					if(typeof type === 'string' && typeof url === 'string' && typeof sync === 'boolean'){
						
						S[0].open(type,url,sync);
						return S;//Continue Developing
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf open() Function Arguments Are Wrong !");
						
					}
					
				};
				S.get = function(url,sync){
					
					if(typeof url === 'string' && typeof sync === 'boolean'){
						
						S[0].open("GET",url,sync);
						return S;//Continue Developing
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf get() Function Argument(s) Are Wrong !");
						
					}
					
				};
				S.post = function(url,sync){
					
					
					if(typeof url === 'string' && typeof sync === 'boolean'){
						
						S[0].open("POST",url,sync);
						return S;//Continue Developing
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nTypeOf post() Function Arguments Are Wrong !");
					}
					
				};
				S.send = function(values){
					
					if(values === undefined){
						
						S[0].send();
						
					} else {
						if(typeof values === 'string'){
							
							S[0].send(values);
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut String Value In send() Function !");
							
						}
					}
					return S;//Continue Developing
					
				};
				S.readyChange = function(func){
					
					if(typeof func === 'function'){
						
						S[0].onreadystatechange = func;
						return S;//Continue Developing
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut A Function Value In readyChange() Function !");
						
					}
					
				};
				S.isDone = function(){
					
					return (S[0].readyState === (XMLHttpRequest.DONE || ActiveXObject.DONE));
					
				};
				S.reqHead = function(property,value){
					
					if(typeof property === 'string' && typeof value === 'string'){
						
						S[0].setRequestHeader(property,value);
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Check Your Ajax Code\nPut String Values In Both Arguments Of reqHead() Function !");
						
					}
					
				};
				S.readyState = function(){
					
					return S[0].readyState;
					
				};
				S.status = function(){
					
					return S[0].status;
					
				};
				S.statusTxt = function(){
					
					return S[0].statusText;
					
				};
				S.respTxt = function(){
					
					return S[0].responseText;
					
				};
				S.respXml = function(){
					
					return S[0].responseXML;
					
				};
				//End Of Ajax Functions
		
				return S;
		
			} else { //Normal DOMObject Mode
				
				S = [slct];
				
			}
			
		}
		
		if(index !== undefined){ //Check General Index Adjustment
			if(typeof index === 'string'){
				index = index.toLowerCase();
				switch (index){
					case "$odd":
						var temp = [];
						for(var i=0; i<S.length; i++){
							if(i === 0 || i%2 === 0){
								temp.push(S[i]);
							}
						}
						S = temp;
					break;
					case "$even":
						var temp = [];
						for(var i=0; i<S.length; i++){
							if(i === 1 || i%2 !== 0){
								temp.push(S[i]);
							}
						}
						S = temp;
					break;
					case "$first":
						S = [S[0]];
					break;
					case "$last":
						S = [S[S.length-1]];
					break;
					default:
						S = [S[Number(index)]];
					break;
				}
			} else if(typeof index === 'number'){
				S = [S[index]];
			}
		}
		
		
		var ARRAY = []; //
		S.splice  = ARRAY.splice; //
		S.split   = ARRAY.split ; // REDEFINE TO TRUST
		S.push    = ARRAY.push  ; //
		////////////////////////////
		
		
		//Start Of Function Variables
		var _c$$_ = function (){
		/*
		 *	c$$ Function
		 *	For Easier Style
		 *	In JavaScript
		 */
		
			var props = [],
				vals  = [],
				returnProp = null;
			/*
			 *	Load Properties And Values
			 */
			for(var j=0; j<arguments.length; j++){ //ForEach Argument
				var style = arguments[j];
				if(typeof style == 'string'){ //If String Style
					
					var arr = style.split(/[\:|;]/g);
					for(var i=0; i<arr.length; i += 2) props.push(arr[i].replace(/ /g,""));
					for(var i=1; i<arr.length; i += 2) vals.push(arr[i]);
					
				} else if(typeof style == 'object'){ //If Object Style
					for(var i=0; i<S.length; i++){
						for(var myStyleName in style){
							if(myStyleName in S[i].style){
								
								if(style[myStyleName].toLowerCase().trim() == "$get"){//Get Property Command
									returnProp = S[i].style[myStyleName];
									continue;
								}
								
								S[i].style[myStyleName] = style[myStyleName];
								
							}
						}
					}
				}
			}
			/*
			 *	Do Styles On Each Elements
			 */
			
			for(var j=0; j<props.length; j++){   //ForEach Style
				for(var i=0; i<this.length; i++){ //ForEach Element
					
					props[j] = props[j].toLowerCase();
					
					var p = window.javaSnake.styleToJs(props[j]);
					
					if(vals[j].toLowerCase().trim() === "$get"){//Get Property Command
						
						returnProp = S[i].style[p];
						continue;
						
					}
					
					if(p in this[i].style) this[i].style[p] = vals[j];
					
				}
			}
			
			return (returnProp != null)? returnProp:S;/*Continue Developing !!!*/
		},
		_css_ = function (){
		/*
		 *	Function For Set Some Style (Like jQuery Library)
		 */
			for(var g=0; g<arguments.length; g++){
				
				if(typeof arguments[g] === 'object'){
					
					var styleObj = arguments[g];
					
					for(var i=0; i<S.length; i++){
						
						for(var myStyleName in styleObj){
							
							if(myStyleName in S[i].style){
								
								S[i].style[myStyleName] = styleObj[myStyleName];
								
							}
							
						}
						
					}
					
				} else if(typeof arguments[g] === 'string'){
					
					if(typeof arguments[g+1] === 'string'){
						
						if(arguments[g] in this[0].style){
							
							for(var i=0; i<this.length; i++){
								
								this[i].style[arguments[g]] = arguments[g+1];
								g++;
							}
							
						}
						
					} else {
						
						if(arguments[g] in this[0].style){
							
							return this[0].style[arguments[g]];
							
						}
						
					}
					
				}
				
			}
			return S; /*Continue Developing !!!*/
		},
		_remove_ = function (){
		/*
		 *	Function For Remove Selected Elements
		 */
			for(var i=0; i<this.length; i++){
				this[i].parentElement.removeChild(this[i]);
			}
		},
		_appendChild_ = function (element,pushFlag){
		/*
		 *	Function For AppendChild To Selected Elements
		 */
			
			var appendedChilds = [];
			
			switch(typeof element){
				case 'object':
					for(var i=0; i<this.length; i++){
						var copy = element.cloneNode(true);
						this[i].appendChild(copy);
						appendedChilds.push(copy);
					}
				break;
				case 'array':
					for(var j=0; j<element.length; j++){
						for(var i=0; i<this.length; i++){
							var copy = element[j].cloneNode(true);
							this[i].appendChild(copy);
							appendedChilds.push(copy);
						}
					}
				break;
			}
			
			if(pushFlag === undefined) pushFlag = false;
			
			if(pushFlag){
				S.splice(0,this.length);
				for(var i=0; i<appendedChilds.length; i++)
					S.push(appendedChilds[i]);
			}
			
			return S; /*Continue Developing !!!*/
		},
		_before_ = function (element,pushFlag){
		/*
		 *	Function For insertAfter Of Selected Elements
		 */
			
			if(pushFlag === undefined) pushFlag = false;
			
			var pushedElems = [];
			
			switch(typeof element){
				
				case 'object':
					
					try{
						if(element.length){//IF ARRAY
							for(var j=0; j<element.length; j++){
								for(var i=0; i<this.length; i++){
									var copy = element[j].cloneNode(true);
									this[i].parentNode.insertBefore(copy, this[i]);
									if(pushFlag) pushedElems.push(copy);
								}
							}
							
							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}
							
							return S; /*Continue Developing !!!*/
						} else {//IF OBJECT
							for(var i=0; i<this.length; i++){
								var copy = element.cloneNode(true);
								this[i].parentNode.insertBefore(copy, this[i]);
								if(pushFlag) pushedElems.push(copy);
							}
							
							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}
							
							return S; /*Continue Developing !!!*/
						}
					} catch(e) {
						
						window.javaSnake.error("javaSnake: Put DOMObject In before() Function !");
						
					}
					
				break;
				case 'string':
					
					element = document.createTextNode(element);
					
					for(var i=0; i<this.length; i++){
						var copy = element.cloneNode(true);
						this[i].parentNode.insertBefore(copy, this[i]);
						if(pushFlag) pushedElems.push(copy);
					}
					
					if(pushFlag){
						S.splice(0,this.length);
						for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
					}
					
					return S; /*Continue Developing !!!*/
					
				break;
				default:
					
					window.javaSnake.error("javaSnake: Put DOMObject Or String Value In before() Function !");
					
				break;
				
			}
		},
		_after_ = function (element,pushFlag){
		/*
		 *	Function For insertAfter Of Selected Elements
		 */
			
			if(pushFlag === undefined) pushFlag = false;
			
			var pushedElems = [];
			
			switch(typeof element){
				
				case 'object':
					
					try{
						if(element.length){//IF ARRAY
							for(var j=0; j<element.length; j++){
								for(var i=0; i<this.length; i++){
									var copy = element[j].cloneNode(true);
									if(pushFlag) pushedElems.push(copy);
									if(this[i].nextSibling){
										this[i].parentNode.insertBefore(copy, this[i].nextSibling);
									} else {
										var elemIndex = indexOfElement_(this[i]);
										if(elemIndex + 1 == this[i].parentElement.childNodes.length){
											this[i].parentNode.appendChild(copy);
										} else {
											this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
										}
									}
								}
							}
							
							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}
							
							return S; /*Continue Developing !!!*/
						} else {//IF OBJECT
							for(var i=0; i<this.length; i++){
								var copy = element.cloneNode(true);
								if(pushFlag) pushedElems.push(copy);
								if(this[i].nextSibling){
									this[i].parentNode.insertBefore(copy, this[i].nextSibling);
								} else {
									var elemIndex = indexOfElement_(this[i]);
									if(elemIndex + 1 == this[i].parentElement.childNodes.length){
										this[i].parentNode.appendChild(copy);
									} else {
										this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
									}
								}
							}
							
							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}
							
							return S; /*Continue Developing !!!*/
						}
					} catch(e) {
						
						window.javaSnake.error("javaSnake: Put DOMObject Value In after() Function !");
						
					}
					
				break;
				case 'string':
					
					element = document.createTextNode(element);
					
					for(var i=0; i<this.length; i++){
						var copy = element.cloneNode(true);
						if(pushFlag) pushedElems.push(copy);
						if(this[i].nextSibling){
							this[i].parentNode.insertBefore(copy, this[i].nextSibling);
						} else {
							var elemIndex = indexOfElement_(this[i]);
							if(elemIndex + 1 == this[i].parentElement.childNodes.length){
								this[i].parentNode.appendChild(copy);
							} else {
								this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
							}
						}
					}
					
					if(pushFlag){
						S.splice(0,this.length);
						for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
					}
					
					return S; /*Continue Developing !!!*/
					
				break;
				default:
					
					window.javaSnake.error("javaSnake: Put DOMObject Or String Value In after() Function !");
					
				break;
				
			}
		},
		_indexOfThese_ = function(){
		/*
		 *	Function For Getting Index Of An Element
		 */
			var indexArr = [];
			
			for(var i=0; i<this.length; i++){
				var indexNum = 0;
				var temp = null;
				if(this[i].previousSibling){
					temp = this[i].previousSibling;
					indexNum += 1;
					while(temp.previousSibling){
						temp = temp.previousSibling;
						indexNum += 1;
					}
				}
				indexArr.push(indexNum);
			}
			
			return indexArr;
		},
		_html_ = function (html, continueDevFlag){
		/*
		 *	Function For Putting innerHTML(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false };
			if(html !== undefined){
				for(var i=0; i<this.length; i++){
					this[i].innerHTML = html;
				}
			} else {
				if(!continueDevFlag){ return S[0].innerHTML; }
			}
			return S; /*Continue Developing !!!*/
		},
		_text_ = function (text,continueDevFlag){
		/*
		 *	Function For Setting/Getting Text(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false };
			
			if(text !== undefined){
				for(var i=0; i<this.length; i++){
					this[i].textContent = text;
				}
			} else {
				if(!continueDevFlag){
					var texts = '';
					for(var i=0; i<this.length; i++){
						texts += this[i].textContent;
					}
					return texts;
				}
			}
			return S; /*Continue Developing !!!*/
		},
		_val_ = function (value, continueDevFlag){
		/*
		 *	Function For Setting/Getting Values(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false }
			
			if(value !== undefined){
				
				for(var i=0; i<S.length; i++){
					S[i].value = value;
				}
				
			} else {
				if(!continueDevFlag){
					return S[0].value;
				}
			}
			return S; /*Continue Developing !!!*/
		},
		_attr_ = function (){
		/*
		 *	Function For Setting/Getting Values(s)
		 */
			var rtrn = null,
				addFlag = false;
			
			if(typeof arguments[arguments.length-1] == "boolean") addFlag = arguments[arguments.length-1];
			
			for(var i=0; i<S.length; i++){/*Each Element*/
				for(var j=0; j<arguments.length; j++){/*Each Argument*/
					var atr = arguments[j];
					switch(typeof atr){
						case 'string':
							
							if(typeof arguments[j+1] == 'string'){
								
								if(addFlag){/*Current Attributes + New Attributes*/
								
									if(S[i].hasAttribute(atr)){
										
										S[i].setAttribute(atr, S[i].getAttribute(atr) + " " + arguments[j+1]);
										
									} else {
										
										S[i].setAttribute(atr, arguments[j+1]);
										
									}
									
								} else {/*Just New Attributes*/
									
									S[i].setAttribute(atr, arguments[j+1]);
									
								}
								
								j++;
								
							} else {
								
								rtrn = S[0].getAttribute(atr);
								
							}
							
						break;
						case 'object':
							
							if(!addFlag){/*Just New Attributes*/
								
								for(var value in atr){ S[i].setAttribute(value, atr[value]); }
								
							} else {/*Current Attributes + New Attributes*/
								
								for(var value in atr){
									
									if(S[i].hasAttribute(value)){
										
										S[i].setAttribute(value, S[i].getAttribute(value) + " " + atr[value]);
										
									} else {
										
										S[i].setAttribute(value, atr[value]);
										
									}
									
								}
								
							}
							
						break;
						case 'boolean': /*NoThing!*/ break;
						default:
							
							window.javaSnake.error("javaSnake: Enter String Or Object Value In attr() Function !");
							
						break;
					}
				}
			}
			return rtrn != null? rtrn:S/*Continue Developing !!!*/;
		},
		_offset_ = function (adjustment, index){
		/*
		 *	Function For Adjust Offset(s)
		 */
			if(adjustment === undefined){
				return {
					top:S[0].offsetTop,
					left:S[0].offsetLeft,
					width:S[0].offsetWidth,
					height:S[0].offsetHeight,
					parent:S[0].offsetParent
				};
			} else if(typeof adjustment == 'object'){
				if(index !== undefined){
					if("top" in adjustment){
						this[index].style.top = adjustment.top + "px";
					}
					if("left" in adjustment){
						this[index].style.left = adjustment.left + "px";
					}
				} else {
					if("top" in adjustment){
						for(var i=0; i<this.length; i++){
							this[i].style.top = adjustment.top + "px";
						}
					}
					if("left" in adjustment){
						for(var i=0; i<this.length; i++){
							this[i].style.left = adjustment.left + "px";
						}
					}
				}
				return S; /*Continue Developing !!!*/
			} else {
				window.javaSnake.error("javaSnake: Enter Object Value In offset() Function !");
			}
		},
		_each_ = function(func){
			
			if(func !== undefined){
				if(typeof func == 'function'){
					for(var i=0; i<S.length; i++){ //Foreach Element
						
						S[i]._______F______ = func;
						S[i]._______F______();
						S[i]._______F______ = undefined;
						
					}
					//for(var i=0; i<S.length; i++){ S[i].f = null }
				} else {
					
					window.javaSnake.error("javaSnake_S: Enter Function Value In each Function !");
					
				}
			}
			return S; /*Continue Developing !!!*/
		},
		_get_ = function(num){
			
			switch(typeof num){
				
				case 'number':
					
					if(num > (S.length-1)) return S[S.length-1];
					if(num < 0) return S[0];
					//else
					return S[num];
					
				break;
				case 'string':
					
					if(typeof Number(num) == 'number'){
						
						var temp = Number(num);
						
						if(temp > (S.length-1)) return S[S.length-1];
						if(temp < 0) return S[0];
						//else
						return S[temp];
						
					} else {
						
						window.javaSnake.error("javaSnake: Put A String That Could Convert To Number\nIn The Argument Of get() Function !");
						
					}
					
				break;
				case 'undefined':
					
					return S[0];
					
				break;
				default:
					
					window.javaSnake.error("javaSnake: Put Number ,String Or Undefined Value In The Argument Of get() Function !\nThat Contains A Number .");
					
				break;
				
			}
			
		},
		
		/*///////////////////////////
		/*	KeyBoard, Mouse, & DOM  /
		/*	Event Functions         /
		/*///////////////////////////
		
		
		
		//Mouse Events//
		_onMouseDown_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "mousedown", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onClick_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "click", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onMouseUp_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "mouseup", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onDblClick_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "dblclick", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onMouseOver_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "mouseover", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onMouseMove_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "mousemove", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onMouseOut_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "mouseout", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		
		
		
		//DOM Events//
		_onAbort_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "abort", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onBlur_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "blur", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onChange_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "change", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onActivate_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMActivate", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onAttributeNameChanged_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMAttributeNameChanged", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onAttributeModified_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMAttrModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onCharacterDataModified_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMCharacterDataModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onElementNameChanged_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMElementNameChanged", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onFocusIn_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMFocusIn", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onFocusOut_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMFocusOut", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onNodeInserted_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMNodeInserted", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onNodeInsertedIntoDocument_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMNodeInsertedIntoDocument", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onNodeRemoved_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMNodeRemoved", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onNodeRemovedFromDocument_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMNodeRemovedFromDocument", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onSubtreeModified_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "DOMSubtreeModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onError_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "error", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onFocus_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "focus", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onLoad_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "load", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onOffline_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "offline", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onOnline_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "online", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onReset_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "reset", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onResize_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "resize", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onScroll_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "scroll", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onSelect_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "select", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onSubmit_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "submit", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onTextInput_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "textInput", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onUnload_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "unload", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		
		
		
		//KeyBoard Events//
		_onKeyDown_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "keydown", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onKeyUp_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "keyup", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		_onKeyPress_ = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.javaSnake.addEvent(func, "keypress", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		},
		
		//'on' Function For Multiple Or Single Events//
		_on_ = function (events, func, useCapture){
			
			if(useCapture === undefined){ useCapture = false; }//Use Capture Default
			
			if(typeof events == 'string'){ //For Each Selected Element
				for(var i=0; i<this.length; i++){
					window.javaSnake.addEvent(func, events, this[i], useCapture);
				}
			} else if(events.length){
				for(var i=0; i<this.length; i++){ //For Each Selected Element
					for(var j=0; j<events.length; j++){ //For Each Event
						window.javaSnake.addEvent(func, events[j], this[i], useCapture);
					}
				}
			}
			return S; /*Continue Developing !!!*/	//Add More 'Continue Developping' For Functions That They Don't Return Anything !
		},
		
		
		
		/*///////////////////////////
		/*	Add, Remove, & Toggle   /
		/*	Class of Elements       /
		/*///////////////////////////
		
		//Add//
		_addClass_ = function (CLASS){
			if(typeof CLASS == 'string'){
				
				var classes = CLASS.split(' ');
				
				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken ClassName
						
						if(this[i].hasAttribute('class')){
							var vals,
								hasClass = false;
							
							vals = this[i].getAttribute('class');
							vals = vals.split(' ');
							
							for(var k=0; k<vals.length; k++){
								if(vals[k] == classes[j]){
									hasClass = true;
								}
							}
							
							if(!hasClass){
								this[i].setAttribute('class', this[i].getAttribute('class') + ' ' + classes[j]);
							}
							
						} else {
							this[i].setAttribute('class', classes[j]);
						}
						
					}
				}
			}
			return S; /*Continue Developing !!!*/
		},
		//Remove//
		_removeClass_ = function (CLASS){
			if(typeof CLASS == 'string'){
				
				var classes = CLASS.split(' ');
				
				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken Class
						
						if(this[i].hasAttribute('class')){
							
							var vals,
								newClass = "";
							
							vals = this[i].getAttribute('class');
							vals = vals.split(' ');
							
							for(var k=0; k<vals.length; k++){//For Each Exist Class
								if(vals[k] != classes[j]){
									newClass += vals[k] + ' ';
								}
							}
							
							if(newClass == ' '){
								this[i].removeAttribute('class');
							} else {
								this[i].setAttribute('class', newClass);
							}
							
						} else { break; } //Because It Hasn't Got Any Class Attribute
						
					}
				}
			}
			return S; /*Continue Developing !!!*/
		},
		//Toggle//
		_toggleClass_ = function (CLASS){
			if(typeof CLASS == 'string'){
				
				var classes = CLASS.split(' ');
				
				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken Class
						
						if(this[i].hasAttribute('class')){
							if(this[i].getAttribute('class').search(/[\S]+/gi) != -1){
								var vals,
									hasClass = false;
								
								vals = this[i].getAttribute('class');
								vals = vals.split(' ');
								
								for(var k=0; k<vals.length; k++){//For Each Exist Class
									if(vals[k] == classes[j]){
										hasClass = true;
									}
								}
								
								if(hasClass){
									
									var newClass = "";
									
									for(var k=0; k<vals.length; k++){
										if(vals[k] != classes[j]){
											newClass += vals[k] + ' ';
										}
									}
									
									if(newClass == ' '){
										this[i].removeAttribute('class');
									} else {
										this[i].setAttribute('class', newClass);
									}
									
								} else {
									
									this[i].setAttribute('class', this[i].getAttribute('class') + ' ' + classes[j]);
									
								}
							} else {
								this[i].setAttribute('class', classes[j]);
							}
						} else {
							this[i].setAttribute('class', classes[j]);
						}
						
					}
				}
			}
			return S; /*Continue Developing !!!*/
		},
		
		/*///////////////////////////////
		/*	Selects Siblings Or Index	/
		/*	of The First Elements    	/
		/*///////////////////////////////
		
		//Siblinger//
		_siblinger_ = function(){
			
			var elems = [];
			
			for(var g=0; g<arguments.length; g++){
				
				for(var h=0; h<S.length; h++){
					
					var id = arguments[g];
					
					if(typeof id == 'number'){ //Number Mode
						
						if(id > 0){ //Next Sibling
							
							var sibEl    = S[h],
								sib      = S[h],
								num      = 0,
								pushFlag = true;
							
							while(sib.nextSibling){
								
								if(num == id) break;
								
								sib = sib.nextSibling;
								
								if(sib.nodeName != "#text"){
									sibEl = sib;
									num++;
								}
								
							}
							
							for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;
							
							if(pushFlag && sibEl != S[h]) elems.push(sibEl);
							
						} else if(id < 0){ //Previous Sibling
							
							var sibEl    = S[h],
								sib      = S[h],
								num      = 0,
								pushFlag = true;
							
							id *= -1; //Because It's A Negative Number
							
							while(sib.previousSibling){
								
								if(num == id) break;
								
								sib = sib.previousSibling;
								
								if(sib.nodeName != "#text"){
									sibEl = sib;
									num++;
								}
								
							}
							
							for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;
							
							if(pushFlag && sibEl != S[h]) elems.push(sibEl);
							
						} else { //It Self
							
							var pushFlag = true;
							
							for(var i=0; i<elems.length; i++) if(elems[i] == S[h]) pushFlag = false;
							
							if(pushFlag) elems.push(S[h]);
							
						}
						
					} else if(typeof id == 'string'){ //String Mode
						
						var str = id.split(' '); //Make Selections Separate
						
						for(var k=0; k<str.length; k++){
							
							if(str[k][0] == '.'){ //Select Them By ClassName
								
								var els = [],
									sib = S[h].parentElement.childNodes;
								str[k] = str[k].slice(1,str[k].length); //Remove The Class Dot
								
								for(var i=0; i<sib.length; i++){
									
									if(sib[i] != S[h]){
										
										if(sib[i].nodeName != '#text'){
										
											if(sib[i].hasAttribute('class')){
												
												var cls = sib[i].getAttribute('class').split(' ');
												
												for(var j=0; j<cls.length; j++){
													
													if(str[k] == cls[j]){
														
														var pushFlag = true;
														
														//Check If It Exists In Selected Elements Array
														for(var l=0; l<elems.length; l++) if(elems[l] == sib[i]) pushFlag = false;
														
														if(pushFlag) elems.push(sib[i]);
														
													}
													
												}
												
											}
											
										}
										
									}
									
								}
								
							} else if(str[k][0] == '#'){ //Select Them By IdName
								
								var els = [],
									sib = S[h].parentElement.childNodes;
								str[k] = str[k].slice(1,str[k].length); //Remove The Id Sharp
								
								for(var i=0; i<sib.length; i++){
									
									if(sib[i] != S[h]){
										
										if(sib[i].nodeName != '#text'){
										
											if(sib[i].hasAttribute('id')){
												
												var sibId = sib[i].getAttribute('id');
												
												if(sibId == str[k]){
													
													var pushFlag = true;
													
													//Check If It Exists In Selected Elemes Array
													for(var l=0; l<elems.length; l++) if(elems[l] == sib[i]) pushFlag = false;
													
													if(pushFlag) elems.push(sib[i]);
													
												}
												
											}
											
										}
										
									}
									
								}
								
							} else {
								
								if(Number(str[k]).toString() != 'NaN'){ //It Can Be A Number
									
									var idNum = str[k];
									
									if(idNum > 0){ //Next Sibling
										
										var sibEl    = S[h],
											sib      = S[h],
											num      = 0,
											pushFlag = true;
										
										while(sib.nextSibling){
											
											if(num == idNum){ break; }
											
											sib = sib.nextSibling;
											
											if(sib.nodeName != "#text"){
												sibEl = sib;
												num++;
											}
											
										}
										
										for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;
										
										if(pushFlag && sibEl != S[h]) elems.push(sibEl);
										
									} else if(idNum < 0){ //Previous Sibling
										
										var sibEl    = S[h],
											sib      = S[h],
											num      = 0,
											pushFlag = true;
										
										idNum *= -1; //Because It's A Negative Number
										
										while(sib.previousSibling){
											
											if(num == idNum){ break; }
											
											sib = sib.previousSibling;
											
											if(sib.nodeName != "#text"){
												sibEl = sib;
												num++;
											}
											
										}
										
										for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;
										
										if(pushFlag && sibEl != S[h]) elems.push(sibEl);
										
									} else { //It Self
										
										var pushFlag = true;
										
										for(var i=0; i<elems.length; i++) if(elems[i] == S[h]) pushFlag = false;
										
										if(pushFlag) elems.push(S[h]);
										
									}
											
								} else { //It Can'T Be A Number; Therefore, You Should Select Them By Tag Name
									
									str[k] = str[k].toUpperCase() //Make It UpperCase Because Of Node Names Are Capital
									
									var sib = S[h].parentNode.childNodes;
									
									for(var i=0; i<sib.length; i++){
										
										if(S[h] != sib[i] && sib[i].nodeName == str[k]){
											
											var pushFlag = true;
											
											for(var j=0; j<elems.length; j++) if(elems[j] == sib[i]) pushFlag = false;
											
											if(pushFlag) elems.push(sib[i]);
											
										}
										
									}
									
								}
								
							}
							
						}
						
					} else { //Else If TypeOf Arguments Didn't Number/String
						
						window.javaSnake.error("javaSnake: Put Number/String Value In Arguments Of siblinger() Function !");
						
					}
					
				}
					
			}
			
			S.splice(0,this.length);
			
			for(var i=0; i<elems.length; i++) S.push(elems[i]);
			
			return S;/*Continue Developing !*/
			
		}, //End Of Siblinger Function//
		_prvSib_ = function(){
			
			var elems = [];
			
			for(var i=0; i<S.length; i++)
				if(S[i].previousSibling != undefined)
					if(S[i].previousSibling.nodeName != "#text")
						elems.push(S[i].previousSibling);
					else
						if(S[i].previousSibling.previousSibling != undefined)
							elems.push(S[i].previousSibling.previousSibling);
			
			S.splice(0,this.length);
			
			for(var i=0; i<elems.length; i++) S.push(elems[i]);
			
			return S;/*Continue Developing !*/
			
		},
		_nxtSib_ = function(){
			
			var elems = [];
			
			for(var i=0; i<S.length; i++){
				if(S[i].nextSibling != undefined)
					if(S[i].nextSibling.nodeName != "#text")
						elems.push(S[i].nextSibling);
					else
						if(S[i].nextSibling.nextSibling != undefined)
							elems.push(S[i].nextSibling.nextSibling);
			}
			
			S.splice(0,this.length);
			
			for(var i=0; i<elems.length; i++) S.push(elems[i]);
			
			return S;/*Continue Developing !*/
			
		},
		_child_ = function(num){
			
			if(typeof num == 'number'){
				
				var elems = [];
				
				for(var i=0; i<S.length; i++)
					if(S[i].childNodes[num].nodeName != "#text" && S[i].childNodes.length != 0)
						elems.push(S[i].childNodes[num]);
					else
						window.javaSnake.warning("javaSnake: Some Of Child Nodes Was Not Selected, Because They Was 'textNode' !\nOR -> There Is Not Any ChildNodes !");
				
				S.splice(0,this.length);
				
				for(var i=0; i<elems.length; i++) S.push(elems[i]);
				
				return S;/*Continue Developing !*/
				
			} else if(typeof num == 'string' && typeof Number(num) == 'number'){
				
				var elems = [];
				
				for(var i=0; i<S.length; i++)
					if(S[i].childNode[Number(num)].nodeName != "#text" && S[i].childNodes.length != 0)
						elems.push(S[i].childNodes[Number(num)]);
					else
						window.javaSnake.warning("javaSnake: Some Of Child Nodes Was Not Selected, Because They Was 'textNode' !\nOR -> There Is Not Any ChildNodes !");
				
				S.splice(0,this.length);
				
				for(var i=0; i<elems.length; i++) S.push(elems[i]);
				
				return S;/*Continue Developing !*/
				
			} else {
				
				window.javaSnake.error("javaSnake: Put A Number Value In Argument Of child() Function !");
				
			}
			
		},
		_parent_ = function(){
			
			var elems = [];
			
			for(var i=0; i<S.length; i++){
				
				var exists = false;
				
				for(var j=0; j<elems.length; j++){
					
					if(elems[j] == S[i].parentElement) exists = true;
					
				}
				
				if(!exists) elems.push(S[i].parentElement);
				
			}
			
			S.splice(0,this.length);
			
			for(var i=0; i<elems.length; i++) S.push(elems[i]);
			
			return S;/*Continue Developing !*/
			
		},
		_fullS_ = function(){
		/*
		 * You Can Toggle Full Screen Using This Function
		 */
			if(
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement
			  ) {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if(document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			  } else {
				if(this[0].requestFullscreen) {
					this[0].requestFullscreen();
				} else if(this[0].mozRequestFullScreen) {
					this[0].mozRequestFullScreen();
				} else if(this[0].webkitRequestFullscreen) {
					this[0].webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if(this[0].msRequestFullscreen) {
					this[0].msRequestFullscreen();
				}
			}
			return S; /*Continue Developing !!!*/
		},
		_indexer_ = function (index){
			if(typeof index == 'number'){ //In Number Mode
				
				if(this.length > 1){
					
					if(index >= this.length-1){
						
						S.splice(0,this.length-1);
						
					} else if(index <= 0){
						
						S.splice(1,this.length);
						
					} else {
						
						S.splice(index+1,(this.length-1)-index);
						S.splice(0,index);
						
					}
				}
				
			} else if(typeof index == 'string'){ //In String Mode
				
				if(this.length > 1){
					
					index = index.toLowerCase();
					
					switch (index){
						case "$odd":
							
							var temp = [];
							for(var i=0; i<S.length; i++){
								
								if(i == 0 || i%2 == 0){
									temp.push(S[i]);
								}
								
							}
							S.splice(0,this.length);
							for(var i=0; i<temp.length; i++){ S.push(temp[i]) }
							
						break;
						case "$even":
							
							var temp = [];
							for(var i=0; i<S.length; i++){
								
								if(i == 1 || i%2 != 0){
									temp.push(S[i]);
								}
								
							}
							S.splice(0,this.length);
							for(var i=0; i<temp.length; i++){ S.push(temp[i]) }
							
						break;
						case "$first":
							S.splice(1,this.length);
						break;
						case "$last":
							S.splice(0,this.length-1);
						break;
					}
					
				}
				
			}
			return S;
		},
		_S_ = window.javaSnake,
		_pushElem_ = function(){
			
			for(var i=0; i<arguments.length; i++){
				
				var stack = arguments[i];
				
				if(typeof stack == 'string'){ //General String
					
					var temp = document.querySelectorAll(stack);
					for(var j=0; j<temp.length; j++){
						S.push(temp[j]);
					}
					
				} else if(typeof stack == 'object'){
					
					if(stack.ARRAY_TYPE == "Snake.js"){
						
						for(var j=0; j<stack.length; j++){
							
							S.push(stack[j]);
							
						}
						
					} else {
						
						S.push(stack);
						
					}
					
				}
				
			}
			
			return S; //Continue Developing
		},
		_scrlTop_ = function(scrollSize){
			
			if(scrollSize === undefined){
				
				if(S[0] != window) return S[0].scrollTop;
				else return S[0].pageYOffset;
				
			} else if(typeof scrollSize == 'number'){
				
				for(var i=0; i<S.length; i++){
					
					S[i].scrollTop = scrollSize;
					
				}
				return S; //Continue Developing
			}
			
		},
		_scrlLeft_ = function(scrollSize){
			
			if(scrollSize === undefined){
				
				if(S[0] != window) return S[0].scrollLeft;
				else return S[0].pageXOffset;
				
			} else if(typeof scrollSize == 'number'){
				
				for(var i=0; i<S.length; i++){
					
					S[i].scrollLeft = scrollSize;
					
				}
				return S; //Continue Developing
			}
			
		},
		_scrlWidth_ = function(){
			
			if(S[0] != window) return S[0].scrollWidth;
			else return S[0].innerWidth;
			
		},
		_scrlHeight_ = function(){
			
			if(S[0] != window) return S[0].scrollHeight;
			else return S[0].innerHeight;
			
		},
		_onScrollArrives_ = function(func,before){
			
			if(before === undefined || typeof before != 'boolean') before = false;
			
			for(var i=0; i<S.length; i++){
				
				window.javaSnake.onScrollArrives(S[i],func,before);
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_onScrollArrivesOnce_ = function(func,before){
			
			if(before === undefined || typeof before != 'boolean') before = false;
			
			for(var i=0; i<S.length; i++){
				
				window.javaSnake.onScrollArrivesOnce(S[i],func,before);
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_scrlToX_ = function(num,speed,delay){
			
			for(var i=0; i<S.length; i++){
				
				if(S[i] != window && S[i] != document){
					
					window.javaSnake.scrlToX_elem(S[i],num,speed,delay);
					
				} else {
					
					window.javaSnake.scrlToX(num,speed,delay);
					
				}
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_scrlToY_ = function(num,speed,delay){
			
			for(var i=0; i<S.length; i++){
				
				if(S[i] != window && S[i] != document){
					
					window.javaSnake.scrlToY_elem(S[i],num,speed,delay);
					
				} else {
					
					window.javaSnake.scrlToY(num,speed,delay);
					
				}
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_scrlToXY_ = function(num,speed,delay){
			
			for(var i=0; i<S.length; i++){
				
				if(S[i] != window && S[i] != document){
					
					window.javaSnake.scrlToX_elem(S[i],num,speed,delay);
					window.javaSnake.scrlToY_elem(S[i],num,speed,delay);
					
				} else {
					
					window.javaSnake.scrlToX(num,speed,delay);
					window.javaSnake.scrlToY(num,speed,delay);
					
				}
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_property_ = function(){
			
			var rtrn = null;
			for(var i=0; i<S.length; i++){
				for(var j=0; j<arguments.length; j++){
					var prop = arguments[j];
					switch(typeof prop){
						case 'string':
							
							if(typeof arguments[j+1] == 'string'){
								
								if(prop in S[i]){
									S[i][prop] = arguments[j+1];
								}
								j++;
								
							} else {
								if(prop in S[0]){
									rtrn = S[0][prop];
								}
							}
							
						break;
						case 'object':
							
							for(var p in prop){
								if(p in S[i]){ S[i][p] = prop[p]; }
							}
							
						break;
					}
				}
			}
			return rtrn != null? rtrn:S/*Continue Developing*/;
			
		},
		_outerWidth_ = function(marginBool){
			
			var ouWt = 0;
			
			if(S[0] != window){
				
				ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("border-width"))[0]) * 2;
				ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-left"))[0]);
				ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-right"))[0]);
				ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("width"))[0]);
				
				if(marginBool !== undefined){
					if(typeof marginBool == 'boolean'){
						
						if(marginBool){
							ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-left"))[0]);
							ouWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-right"))[0]);
						}
						
					} else {
						
						window.javaSnake.error("javaSnake: Put Boolean Value In The Argument Of outerWidth() Function !");
						
					}
				}
				
				return ouWt;
				
			} else {
				
				return window.outerWidth;
				
			}
			
		},
		_outerHeight_ = function(marginBool){
			
			var ouHt = 0;
			
			if(S[0] != window){
				
				ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("border-width"))[0]) * 2;
				ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-top"))[0]);
				ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-bottom"))[0]);
				ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("height"))[0]);
				
				if(marginBool !== undefined){
					if(typeof marginBool == 'boolean'){
						
						if(marginBool){
							ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-top"))[0]);
							ouHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-bottom"))[0]);
						}
						
					} else {
						
						window.javaSnake.error("javaSnake: Put Boolean Value In The Argument Of outerHeight() Function !");
						
					}
				}
				
				return ouHt;
				
			} else {
				
				return window.outerHeight;
				
			}
			
		},
		_innerWidth_ = function(){
			
			var inWt = 0;
			
			if(S[0] != window){
				
				inWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-left"))[0]);
				inWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-right"))[0]);
				inWt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("width"))[0]);
				
				return inWt;
				
			} else {
				
				return window.innerWidth;
				
			}
			
		},
		_innerHeight_ = function(){
			
			var inHt = 0;
			
			if(S[0] != window){
				
				inHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-top"))[0]);
				inHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-bottom"))[0]);
				inHt += window.javaSnake.isNumUndefined(window.javaSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("height"))[0]);
				
				return inHt;
				
			} else {
				
				return window.innerHeight;
				
			}
			
		},
		_rev_ = function(){
			
			S = window.javaSnake.rev(S);
			return S;
			
		},
		_toggleAttr_ = function(attrName, val1, val2){
			
			if(typeof attrName == 'string'){
			
				if(val2 === undefined){//Toggle One Value
					
					for(var i=0; i<S.length; i++){//For Each Element
						
						if(S[i].getAttribute(attrName) == val1){
							
							S[i].setAttribute(attrName, "");
							
						} else {
							
							S[i].setAttribute(attrName, val1);
							
						}
						
					}
					
				} else {//Toggle Two Values
					
					for(var i=0; i<S.length; i++){//For Each Element
						
						if(S[i].getAttribute(attrName) == val1){
							
							S[i].setAttribute(attrName, val2);
							
						} else if(S[i].getAttribute(attrName) == val2){
							
							S[i].setAttribute(attrName, val1);
							
						} else {
							
							S[i].setAttribute(attrName, val1);
							
						}
						
					}
					
				}
				
			} else {//Non-String Value
				
				window.javaSnake.error("javaSnake: Put String Value In The First Argument Of toggleAttr() Function !");
				
			}
			
			return S;/*Continue Developing !*/
			
		},
		_realStyle_ = function(property, pseudoElt){
			
			return window.javaSnake.realStyle(S[0],property,pseudoElt);
			
		},
		_TEST_ = function(){
			
			// You Can Also Test Your Functions Here To
			// Develop This Library !
			
		};
		//End Of Function Variables
		
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		//                                 LIST OF PROPERTIES                                   //
		//////////////////////////////////////////////////////////////////////////////////////////
		S.ARRAY_TYPE                     = "Snake.js";
		//////////////////////////////////////////////////////////////////////////////////////////
		//                                  LIST OF FUNCTIONS                                   //
		//////////////////////////////////////////////////////////////////////////////////////////
		S.c$$                            = _c$$_;
		/*** A High Futured CSS Controler ***/
		S.css                            = _css_;
		/*** A Light CSS Controler And Returner ***/
		S.remove                         = _remove_;
		/*** It Can Remove DOM Elements ***/
		S.appendChild                    = _appendChild_;
		/*** It Can Append Child Elements To Some Parent Elements ***/
		S.before                         = _before_;
		/*** It Can Insert Element Before Some DOM Elements ***/
		S.after                          = _after_;
		/*** It Can Insert Element After Some DOM Elements ***/
		S.indexOfThese                   = _indexOfThese_;
		/*** It Returns An Array Of Selected Elements Indexes ***/
		S.html                           = _html_;
		/*** It Gets Or Return Html Of The Selected Elements ***/
		S.text                           = _text_;
		/*** It Gets Or Return Text Of The Selected Elements ***/
		S.val                            = _val_;
		/*** It Gets Or Return Value Of The Selected Elements ***/
		S.attr                           = _attr_;
		/*** It Gets Or Return Attributes Of The Selected Elements ***/
		S.offset                         = _offset_;
		/*** It Gets Or Return Offsets Of The First Selected Elements ***/
		S.each                           = _each_;
		/*** It Does A Same Function For All Of Selected Elements ***/
		S.get                            = _get_;
		/*** It Can Return An Item Of Selected Elements ***/
		//////////////////////////////////
		//     |                  |     //
		//     |   Mouse Events   |     //
		//     v                  v     //
		//////////////////////////////////
		S.onMouseDown                    = _onMouseDown_;
		S.onClick                        = _onClick_;
		S.onMouseUp                      = _onMouseUp_;
		S.onDblClick                     = _onDblClick_;
		S.onMouseOver                    = _onMouseOver_;
		S.onMouseMove                    = _onMouseMove_;
		S.onMouseOut                     = _onMouseOut_;
		//////////////////////////////////
		//     |                  |     //
		//     |    DOM Events    |     //
		//     v                  v     //
		//////////////////////////////////
		S.onAbort                        = _onAbort_;
		S.onBlur                         = _onBlur_;
		S.onChange                       = _onChange_;
		S.onActivate                     = _onActivate_;
		S.onAttributeNameChanged         = _onAttributeNameChanged_;
		S.onAttributeModified            = _onAttributeModified_;
		S.onCharacterDataModified        = _onCharacterDataModified_;
		S.onElementNameChanged           = _onElementNameChanged_;
		S.onFocusIn                      = _onFocusIn_;
		S.onFocusOut                     = _onFocusOut_;
		S.onNodeInserted                 = _onNodeInserted_;
		S.onNodeInsertedIntoDocument     = _onNodeInsertedIntoDocument_;
		S.onNodeRemoved                  = _onNodeRemoved_;
		S.onNodeRemovedFromDocument      = _onNodeRemovedFromDocument_;
		S.onSubtreeModified              = _onSubtreeModified_;
		S.onError                        = _onError_;
		S.onFocus                        = _onFocus_;
		S.onLoad                         = _onLoad_;
		S.onOffline                      = _onOffline_;
		S.onOnline                       = _onOnline_;
		S.onReset                        = _onReset_;
		S.onResize                       = _onResize_;
		S.onScroll                       = _onScroll_;
		S.onSelect                       = _onSelect_;
		S.onSubmit                       = _onSubmit_;
		S.onTextInput                    = _onTextInput_;
		S.onUnload                       = _onUnload_;
		//////////////////////////////////
		//    |                    |    //
		//    |  #KeyBoard Events  |    //
		//    v                    v    //
		//////////////////////////////////
		S.onKeyDown                      = _onKeyDown_;
		S.onKeyUp                        = _onKeyUp_;
		S.onKeyPress                     = _onKeyPress_;
		//////////////////////////////////
		S.on                             = _on_;
		/*** Custome Events That You Can Enter Them Like addEventListener Function ***/
		S.addClass                       = _addClass_;
		/*** It Can Add Classes To The Elements ***/
		S.removeClass                    = _removeClass_;
		/*** It Can Remove Classes Of The Elements ***/
		S.toggleClass                    = _toggleClass_;
		/*** It Can Toggle Classes Of The Elements ***/
		S.siblinger                      = _siblinger_;
		/*** It Can Return Siblings Of Matched Elements By TagName, ID, Class And The Number ***/
		S.prvSib                         = _prvSib_;
		/*** It Can Select Previous Siblings Of Matched Elements ***/
		S.nxtSib                         = _nxtSib_;
		/*** It Can Select Next Siblings Of Matched Elements ***/
		S.child                          = _child_;
		/*** It Can Select A Child Node By Number ***/
		S.parent                         = _parent_;
		/*** It Can Select A Parent Elements Of Matched Elements ***/
		S.fullS                          = _fullS_;
		/*** It Can Toggle FullScreen Of The First Element ***/
		S.indexer                        = _indexer_;
		/*** It Can Choose One Or Multiple Elements From Selected Elements ***/
		S.S                              = _S_;
		/*** It Can ReSelect Elements ***/
		S.pushElem                       = _pushElem_;
		/*** It Can Push Elements To The Range Of Selection By Objects, Strings, & Arrays ***/
		//////////////////////////////////
		//    |                    |    //
		//    |  ScrollProperties  |    //
		//    v                    v    //
		//////////////////////////////////
		S.scrlTop                        = _scrlTop_;
		S.scrlLeft                       = _scrlLeft_;
		S.scrlWidth                      = _scrlWidth_;
		S.scrlHeight                     = _scrlHeight_;
		S.onScrollArrives                = _onScrollArrives_;
		S.onScrollArrivesOnce            = _onScrollArrivesOnce_;
		S.scrlToX                        = _scrlToX_;
		S.scrlToY                        = _scrlToY_;
		S.scrlToXY                       = _scrlToXY_;
		//////////////////////////////////
		S.property                       = _property_;
		S.outerWidth                     = _outerWidth_;
		S.outerHeight                    = _outerHeight_;
		S.innerWidth                     = _innerWidth_;
		S.innerHeight                    = _innerHeight_;
		S.rev                            = _rev_;
		S.toggleAttr                     = _toggleAttr_;
		//////////////////////////////////
		S.realStyle                      = _realStyle_;
		S.TEST                           = _TEST_; //For Testing New Functions
		//////////////////////////////////////////////////////////////////////////////////////////
		//======================================================================================//
		//////////////////////////////////////////////////////////////////////////////////////////
		//Note That Ajax Functions Are In Ajax Mode.
		/*( It Means When You Didn't Put Any Ajax Object/Command In The 'SELECTOR'() Function,
			You Will Not Be Able To Access And Use Ajax Functions )*/
		
		window.javaSnake.selected = S;
		
	return S;/*End Of javaSnake() Selector Function*/}
	/*
	 *	Pure/Inner Helping Functions
	 */
	function indexOfElement_(element){
	/*
	 *	Function For Getting Index Of An Element
	 */
		var indexNum = 0;
		var temp = null;
		if(element.previousSibling){
			temp = element.previousSibling;
			indexNum += 1;
			while(temp.previousSibling){
				temp = temp.previousSibling;
				indexNum += 1;
			}
		}
		return indexNum;
	}
	function readyAjax_(){
	/*
	 *	Function For Ready Ajax Object
	 */
	
		try {
			
			return new XMLHttpRequest();
			
		} catch(e) {
			
			try {
				
				return new ActiveXObject("Msxml2.XMLHTTP");
				
			} catch(e) {
				
				try {
					
					return new ActiveXObject("Microsoft.XMLHTTP");
					
				} catch(e) {
					
					return "A newer browser is needed !";
					
				}
				
			}
			
		}
		
	}//End Of Ajax Function
	function styleToJs_(property){
	/*
	 *	Function For Convert CSS Property Name To JavaScript Style Property Name
	 */
		property = property.toLowerCase();
		if(property != "float"){
			return property.replace(/[\-][a-z]/gm,function(match){ return match[1].toUpperCase(); });
		}
		return "cssFloat";
	}
	function jsToStyle_(property){
	/*
	 *	Function For Convert JavaScript Style Property Name To CSS Property Name
	 */
		if(property != "cssFloat"){
			return property.replace(/[A-Z]/gm,function(match){ return "-" + match.toLowerCase(); });
		}
		return "float";
	}
	
}(window, document));//End Of javaSnake In Function Mode

//javaSnake In Object Mode
window.javaSnake.creator     = "SMRSAN";
window.javaSnake.weblog      = "http://smrsan.blogfa.com/";
window.javaSnake.website     = "http://www.javaSnake.com/";
window.javaSnake.version     = "v0.0.1";
window.javaSnake.publishYear = "1395 | 2016";
window.javaSnake.noConflict  = function(){ return window.javaSnake; };
window.S                     = window.javaSnake;
window.javaSnake.javaSnake   = window.javaSnake;
window.javaSnake.S           = window.javaSnake;
window.javaSnake.error       = function(message){ throw Error(message) };
window.javaSnake.log         = function(message){ console.log(message) };
window.javaSnake.warning     = function(message){ console.warn(message)};
window.javaSnake.newArr      = function(){ return []; };
window.javaSnake.newObj      = function(){ return {}; };
window.javaSnake.write       = function(markup){ document.write(markup) }
window.javaSnake.writeLine   = function(markup){ document.writeln(markup) }
window.javaSnake.crtElem     = function(tagName){ return document.createElement(tagName) }
window.javaSnake.alert       = function(message){ window.alert(message) };
window.javaSnake.prompt      = function(message){ return window.prompt(message) };
window.javaSnake.confirm     = function(message){ return window.confirm(message) };
window.javaSnake.die         = function(){ window.javaSnake = undefined;window.S = undefined };
window.javaSnake.doc = document;
window.javaSnake.win = window;
window.javaSnake.addEvent    = function(eFunc, eType, element, useCapture){
	
	if(element === undefined){ element = window }
	if(eType   === undefined){ eType   = "load" }
	
	if(document.addEventListener){
		
		if(typeof eType == "load"){
			
			if(typeof window.onload == "function"){
				
				var existingOnload = window.onload;
				window.onload = function(){
					existingOnload();
					eFunc();
				}
				
			} else {
				
				window.onload = eFunc;
				
			}
			
		} else {
			
			element.addEventListener(eType, eFunc, useCapture);
			
		}
		
	} else if(document.attachEvent){ //Old IEs
		
		if(typeof eType == "load"){
			
			if(typeof window.onload == "function"){
				
				var existingOnload = window.onload;
				window.onload = function(){
					existingOnload();
					eFunc();
				}
				
			} else {
				
				window.onload = eFunc;
				
			}
			
		} else {
			
			element.attachEvent("on" + eType, eFunc, useCapture);
			
		}
		
	}
	
};
window.javaSnake.removeEvent = function(eFunc, eType, element){
	
	if(element === undefined){ element = window }
	if(eType   === undefined){ eType   = "load" }
	
	if(document.removeEventListener){
		
		element.removeEventListener(eType, eFunc, false);
		
	} else if(document.detachEvent){ //Old IEs
		
		element.detachEvent("on" + eType, eFunc);
		
	}
	
};
window.javaSnake.gelId     = function(id){
	
	if(typeof id == 'string'){
		
		return document.getElementById(id)
		
	}
	javaSnake.error("javaSnake: Enter String Value In getElId() Function !");
	
};
window.javaSnake.gelClass  = function(Class){
	
	if(typeof Class == 'string'){
		
		return document.getElementsByClassName(Class)
		
	}
	javaSnake.error("javaSnake: Enter String Value In getElCls() Function !");
	
};
window.javaSnake.gelTag  = function(tagName){
	
	if(typeof tagName == 'string'){
		
		return document.getElementsByTagName(tagName)
		
	}
	javaSnake.error("javaSnake: Enter String Value In getElTag() Function !");
	
};
window.javaSnake.gelTagNs  = function(nameSpace ,tagName){
	
	if(typeof tagName == 'string' && typeof nameSpace == 'string'){
		
		return document.getElementsByTagNameNS(nameSpace ,tagName)
		
	}
	javaSnake.error("javaSnake: Enter String Value In getElTagNs() Function !");
	
};
window.javaSnake.gelName  = function(name){
	
	if(typeof name == 'string'){
		
		return document.getElementsByName(name)
		
	}
	javaSnake.error("javaSnake: Enter String Value In getElName() Function !");
	
};
window.javaSnake.remove   = function(element){
	
	if(typeof element == 'object'){
		
		try {
			
			element.parentElement.removeChild(element);
			
		} catch(event) {
			
			javaSnake.error("javaSnake: Enter DOMObject Value In remove() Function !");
			
		}
		
	} else {
		
		javaSnake.error("javaSnake: Enter DOMObject Value In remove() Function !");
		
	}
	
};
window.javaSnake.setCookie = function(cookObj){
	
	if(typeof cookObj == 'object'){
		
		var name    = "",   //
			value   = "",   //
			expires = "",   //Cookie Loaders
			path    = "",   //
			domain  = "",   //
			secure  = false;//
		
		for(var val in cookObj){
			switch(val){
				case "name":
					if(typeof cookObj[val] == 'string') name = cookObj[val].trim();
					else window.javaSnake.error("javaSnake: Enter String Value For 'name' of setCookie() Function !");
				break;
				case "value":
					if(typeof cookObj[val] == 'string') value = cookObj[val];
					else window.javaSnake.error("javaSnake: Enter String Value For 'value' of setCookie() Function !");
				break;
				case "expires":
					if(typeof cookObj[val] == 'string') expires = ";expires=" + cookObj[val];
					else window.javaSnake.error("javaSnake: Enter String Value For 'expires' of setCookie() Function !");
				break;
				case "path":
					if(typeof cookObj[val] == 'string') path = ";path=" + cookObj[val];
					else window.javaSnake.error("javaSnake: Enter String Value For 'path' of setCookie() Function !");
				break;
				case "domain":
					if(typeof cookObj[val] == 'string') domain = ";domain=" + cookObj[val];
					else window.javaSnake.error("javaSnake: Enter String Value For 'domain' of setCookie() Function !");
				break;
				case "secure":
					if(typeof cookObj[val] == 'boolean') secure = !cookObj ? "":";secure";
					else window.javaSnake.error("javaSnake: Enter Boolean Value For 'secure' of setCookie() Function !");
				break;
				default:
					window.javaSnake.error("javaSnake: What The **** !\nWhat's This: " + val + "\nYour Mistake In setCookie() Function !!!");
				break;
			}
		}
		if(typeof secure == 'boolean') secure = "";
		if(name != "" && value != undefined){
			
			document.cookie = name + "=" + value + expires + path + domain + secure;
			
		} else {
			
			window.javaSnake.error("javaSnake: There Isn't Any Name Or Value For setCookie() Function !");
			
		}
	} else {
		
		window.javaSnake.error("javaSnake: Enter Object Value In setCookie() Function !");
		
	}
	
}
window.javaSnake.getCookie = function(cookName){
	
	var cArray  = [] //Array
	,   cook    = {} //Object
	,   parts   = document.cookie.split(";");
	
	for(var i=0; i<parts.length; i++){
		
		var nameValue = parts[i].split("=");
		
		switch(nameValue[0]){
			case "expires":
				
				cook.expires = nameValue[1];
				
			break;
			case "path":
				
				cook.path = nameValue[1];
				
			break;
			case "domain":
				
				cook.domain = nameValue[1];
				
			break;
			case "secrue":
				
				cook.secure = true;
				
			break;
			default:
				
				if(cook.name){
					
					cArray.push(cook);  
					cook = {};//Reset cook For Insert New Cookie
					
				}
				cook.name  = nameValue[0].trim();//Do Not Use White Spaces !
				cook.value = nameValue[1];
				
			break;
		}
	}
	if(cook.name){ cArray.push(cook); }
	
	if(cookName === undefined){
		
		return cArray; //Return Cookie
		
	} else {
		
		if(typeof cookName == 'string'){
			
			for(var i=0; i<cArray.length; i++){
				
				if(cArray[i]["name"].trim() == cookName.trim()){
					
					return cArray[i]; //Cookie Was Found In The List !
					
				}
				
			}
			
		} else {
			
			window.javaSnake.error("javaSnake: Enter String Value In getCookie() Function !");
			
		}
		
	}
	window.javaSnake.error("javaSnake: The cookName That You Entered, Was Not Found !");
};
window.javaSnake.remCookie = function(cookName){
	if(typeof cookName == 'string'){
		
		var date = new Date();
			
		date.setTime(date.getTime()-60);
		
		var expireDate = date.toGMTString();
		
		window.javaSnake.setCookie({
			name    : cookName,
			value   : "",
			expires : expireDate
		});
		
	} else {
		
		window.javaSnake.error("javaSnake: Enter String Value In remCookie() Function !");
		
	}
};
window.javaSnake.addProp = function(name,func){
	
	if(typeof func == 'function'){
		
		if(typeof name == 'string'){
			
			if(name in window.javaSnake){
				
				window.javaSnake.error("javaSnake: This Function Name: " + name + "\nIs Already Exists In javaSnake Functions !");
				
			} else {
				
				window.javaSnake[name] = func;
				
			}
			
		} else {
			
			window.javaSnake.error("javaSnake: Put String Value In The First Argument Of addFunc() Function !");
			
		}
		
	} else {
		
		window.javaSnake.error("javaSnake: Put Function Value In The Second Argument Of addFunc() Function !");
		
	}
	
};
window.javaSnake.styleToNum = function(style,minus){
	
	minus = (minus === undefined)? true:minus;
	
	var m = minus?
		style.match(/[\-|\+]?\d+\.?\d*/gim)://Matches with calculating minus/plus
		style.match(/\d+\.?\d*/gim);//Matches without calculating minus/plus
	
	if(m !== null){
		for(var i=0; i<m.length; i++) m[i] = (typeof m[i] != "string")? 0:parseFloat(m[i]);
		return m;
	}
	return [0];
	
};
window.javaSnake.arrCopy = function(arr){
	
	if((typeof arr == 'object' || typeof arr == 'array') && arr.length){
		
		var newArr = [];
		
		for(var i=0; i<arr.length; i++) newArr.push(arr[i]);
		
		return newArr;
		
	} else {
		
		window.javaSnake.error("javaSnake: Put Array Value In arrCopy() Function !");
		
	}
	
};
window.javaSnake.getAjax   = function(){
	
	var ajaxObj = null;
	
	try {
		ajaxObj = new XMLHttpRequest();
	} catch(e) {	
		try {
			ajaxObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				ajaxObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				ajaxObj = "A newer browser is needed !";
			}
		}
	}
	
	ajaxObj.set = function(obj){
		
		if(typeof obj == 'object'){
			
			for(var p in obj){
				
				var temp = p.toLowerCase();
				
				switch(temp){
					
					case 'type':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put String Value In 'type' Property !");
							
						}
						
					break;
					case 'url':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put String Value In 'url' Property !");
							
						}
						
					break;
					case 'sync':
						
						if(typeof obj[p] == 'boolean'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put Boolean Value In 'sync' Property !");
							
						}
						
					break;
					case 'data':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put String Value In 'data' Property !");
							
						}
						
					break;
					case 'success':
						
						if(typeof obj[p] == 'function'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put Function Value In 'success' Property !");
							
						}
						
					break;
					case 'fail':
						
						if(typeof obj[p] == 'function'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							window.javaSnake.error("javaSnake_ajax: Put Function Value In 'fail' Property !");
							
						}
						
					break;
					
				}
				
			} //End Of Loading Values
			
			if(this.s_sync === undefined) this.s_sync = false;
			if(this.s_data === undefined) this.s_data = null ;
			if(this.s_fail === undefined) this.s_fail = function(){};
			if(this.s_success === undefined) this.s_success = function(){};
			
			this.open(this.s_type,this.s_url,this.s_sync);
			this.send(this.s_data);
			
			if(this.s_sync){
				
				this.onreadystatechange = function(){
					if(this.readyState == 4){
						
						if(this.status == 200){
							
							this.s_success();
							
						} else {
							
							this.s_fail();
							
						}
						
					}
				};
				
			} else {
				
				if(this.status == 200){
					
					this.s_success();
					
				} else {
					
					this.s_fail();
					
				}
				
			}
			
			return this;
			
		} else {
			
			window.javaSnake.error("javaSnake_ajax: Put Object Value In set() Function !");
			
		}
		
	};
	
	return ajaxObj;
};
window.javaSnake.ajax = function(obj){
	
	if(typeof obj == 'object'){
		
		var ajaxObj = null;
		
		try {
			
			ajaxObj = new XMLHttpRequest();
			
		} catch(e) {
			
			try {
				
				ajaxObj = new ActiveXObject("Msxml2.XMLHTTP");
				
			} catch(e) {
				
				try {
					
					ajaxObj = new ActiveXObject("Microsoft.XMLHTTP");
					
				} catch(e) {
					
					ajaxObj = "A newer browser is needed !";
					
				}
				
			}
			
		}
		
		for(var p in obj){
			
			var temp = p.toLowerCase();
			
			switch(temp){
				
				case 'type':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put String Value In 'type' Property !");
						
					}
					
				break;
				case 'url':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put String Value In 'url' Property !");
						
					}
					
				break;
				case 'sync':
					
					if(typeof obj[p] == 'boolean'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put Boolean Value In 'sync' Property !");
						
					}
					
				break;
				case 'data':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put String Value In 'data' Property !");
						
					}
					
				break;
				case 'headprop':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put String Value In 'HeadProp' Property !");
						
					}
					
				break;
				case 'headval':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put String Value In 'HeadVal' Property !");
						
					}
					
				break;
				case 'success':
					
					if(typeof obj[p] == 'function'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put Function Value In 'success' Property !");
						
					}
					
				break;
				case 'fail':
					
					if(typeof obj[p] == 'function'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						window.javaSnake.error("javaSnake_ajax: Put Function Value In 'fail' Property !");
						
					}
					
				break;
				//****************Develop It !****************
				//You Can Also Make Your Own Properties Here !
				
			}
			
		} //End Of Loading Values
		
		if(ajaxObj.s_sync === undefined) ajaxObj.s_sync = false;
		if(ajaxObj.s_data === undefined) ajaxObj.s_data = null ;
		if(ajaxObj.s_fail === undefined) ajaxObj.s_fail = function(){};
		if(ajaxObj.s_success === undefined) ajaxObj.s_success = function(){};
		
		ajaxObj.open( ajaxObj.s_type , ajaxObj.s_url , ajaxObj.s_sync );
		if(ajaxObj.s_headprop != null && ajaxObj.s_headval != null) ajaxObj.setRequestHeader(ajaxObj.headprop,ajaxObj.headval);
		ajaxObj.send(ajaxObj.s_data);
		
		if(ajaxObj.s_sync){
			
			ajaxObj.onreadystatechange = function(){
				
				if(this.readyState == 4){
					
					if(this.status == 200){
						
						this.s_success();
						
					} else {
						
						this.s_fail();
						
					}
					
				}
				
			};
			
		} else {
			
			if(ajaxObj.status == 200){
				
				ajaxObj.s_success();
				
			} else {
				
				ajaxObj.s_fail();
				
			}
			
		}
		
		return ajaxObj; //To Catch Request Object
		
	} else {
		
		window.javaSnake.error("javaSnake_ajax: Put Object Value In ajax() Function !");
		
	}
	
}; //End Of ajax() Function !
window.javaSnake.styleToJs = function (property){
/*
 *	Function For Convert CSS Property Name To JavaScript Style Property Name
 */
	property = property.toLowerCase();
	if(property != "float"){
		return property.replace(/[\-][a-z]/gm,function(match){ return match[1].toUpperCase(); });
	}
	return "cssFloat";
};
window.javaSnake.jsToStyle = function (property){
/*
 *	Function For Convert JavaScript Style Property Name To CSS Property Name
 */
	if(property != "cssFloat"){
		return property.replace(/[A-Z]/gm,function(match){ return "-" + match; });
	}
	return "float";
};
window.javaSnake.isNumUndefined = function(variable){ return variable !== undefined? variable:0; };
window.javaSnake.isBoolUndefined = function(variable){ return variable !== undefined? variable:false; };
window.javaSnake.isStrUndefined = function(variable){ return variable !== undefined? variable:""; };
window.javaSnake.onScrollArrives = function(element,func,before){
	
	if(before === undefined) before = false;
	
	
	if(before){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		}
		
	} else {
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop+elemHeight-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		}
		
	}
	
	S(window)
	.onScroll(function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(this).innerHeight(),
			winScroll  = S(this).scrlTop();
		
		if(before){
			
			if(winScroll > (elemTop-winHeight)){
				
				element.______FUNCTION_______ = func;
				element.______FUNCTION_______();
				element.______FUNCTION_______ = undefined;
				
			}
		} else {
			
			if(winScroll > (elemTop+elemHeight-winHeight)){
				
				element.______FUNCTION_______ = func;
				element.______FUNCTION_______();
				element.______FUNCTION_______ = undefined;
				
			}
		}

	});
	
};
window.javaSnake.scrlToY = function(num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		window.javaSnake.error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Second Argument Of scrlToY()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > window.pageYOffset){
		
		function scrlAnim(){
			
			if(window.pageYOffset != lastPosition){
				if(num > window.pageYOffset){
					
					if((num - window.pageYOffset) >= speed){
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset + speed);
						
					} else {
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset + (num - window.pageYOffset));
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < window.pageYOffset){
		
		function scrlAnim(){
			
			if(window.pageYOffset != lastPosition){
				if(num < window.pageYOffset){
					
					if((window.pageYOffset - num) >= speed){
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset - speed);
						
					} else {
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset - (window.pageYOffset - num));
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.javaSnake.scrlToX = function(num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		window.javaSnake.error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Second Argument Of scrlToX()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > window.pageXOffset){
		
		function scrlAnim(){
			
			if(window.pageXOffset != lastPosition){
				if(num > window.pageXOffset){
					
					if((num - window.pageXOffset) >= speed){
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset + speed,window.pageYOffset);
						
					} else {
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset + (num - window.pageXOffset),window.pageYOffset);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < window.pageXOffset){
		
		function scrlAnim(){
			
			if(window.pageXOffset != lastPosition){
				if(num < window.pageXOffset){
					
					if((window.pageXOffset - num) >= speed){
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset - speed,window.pageYOffset);
						
					} else {
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset - (window.pageXOffset - num),window.pageYOffset);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.javaSnake.scrlToXY = function(num,speed,delay){
	
	window.javaSnake.scrlToX(num,speed,delay);
	window.javaSnake.scrlToY(num,speed,delay);
	
};
window.javaSnake.scrlToX_elem = function(element,num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		window.javaSnake.error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Third Argument Of scrlToX_elem()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > element.scrollLeft){
		
		function scrlAnim(){
			
			if(element.scrollLeft != lastPosition){
				if(num > element.scrollLeft){
					
					if((num - element.scrollLeft) >= speed){
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft + speed;
						
					} else {
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft + (num - element.scrollLeft);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < element.scrollLeft){
		
		function scrlAnim(){
			
			if(element.scrollLeft != lastPosition){
				if(num < element.scrollLeft){
					
					if((element.scrollLeft - num) >= speed){
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft - speed;
						
					} else {
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft - (element.scrollLeft - num);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.javaSnake.scrlToY_elem = function(element,num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		window.javaSnake.error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Third Argument Of scrlToY_elem()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > element.scrollTop){
		
		function scrlAnim(){
			
			if(element.scrollTop != lastPosition){
				if(num > element.scrollTop){
					
					if((num - element.scrollTop) >= speed){
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop + speed;
						
					} else {
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop + (num - element.scrollTop);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < element.scrollTop){
		
		function scrlAnim(){
			
			if(element.scrollTop != lastPosition){
				if(num < element.scrollTop){
					
					if((element.scrollTop - num) >= speed){
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop - speed;
						
					} else {
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop - (element.scrollTop - num);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.javaSnake.scrlToXY_elem = function(element,num,speed,delay){
	
	window.javaSnake.scrlToX_elem(element,num,speed,delay);
	window.javaSnake.scrlToY_elem(element,num,speed,delay);
	
};
window.javaSnake.rev = function(arr){
	
	try{
		
		if(arr.push){
			
			var rev = window.javaSnake.arrCopy(arr);
			arr.splice(0,arr.length);
			for(var i=rev.length-1; i>=0; i--) arr.push(rev[i]);
			
		} else {
			
			var rev = arr;
			arr = "";
			for(var i=rev.length-1; i>=0; i--) arr.push(rev[i]);
			
		}
		
		return arr;
		
	}catch(e){
		
		window.javaSnake.error("javaSnake: Put Array Or String Value In reverse() Function.");
		
	}
	
}
//A Function For Fire A Function Once, After Scroll Arrives
window.javaSnake.onScrollArrivesOnce = function(element,func,before){
	
	if(before === undefined) before = false;
	
	var elemTop    = S(element).offset().top,
		elemHeight = S(element).outerHeight(),
		winHeight  = S(window).innerHeight(),
		winScroll  = S(window).scrlTop();
	
	var OSAfuncB = function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			window.javaSnake.removeEvent(OSAfuncB, "scroll", window);
			
		}

	};
	var OSAfuncNB = function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > ((elemTop+elemHeight)-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			window.javaSnake.removeEvent(OSAfuncNB, "scroll", window);
			
		}

	};
	
	if(before){
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		} else {
			
			window.javaSnake.addEvent(OSAfuncB,"scroll", window);
			
		}
		
	} else {
		
		if(winScroll > ((elemTop+elemHeight)-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		} else {
			
			window.javaSnake.addEvent(OSAfuncNB,"scroll", window);
			
		}
		
	}
	
};
window.javaSnake.realStyle = function(element, property, pseudoElt){
	
	if(pseudoElt === undefined) pseudoElt = null;
	
	return window.getComputedStyle(element,pseudoElt).getPropertyValue(property);
	
};
//Main Variables In javaSnake (Object Mode)
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

window.javaSnake.selected = null;
window.javaSnake.vars = {};
window.javaSnake.onLoadReloadVars = function(){
	
	var allElements = document.querySelectorAll("*"),
		reg1 = /[\{]{2,2}[a-z|_|\$][a-z|0-9|_|\$]+[\}]{2,2}/gim,//To Get {{VARIBALE-Name}}
		reg2 = /(^[\{]{2,})|([\}]{2,}$)/gi;//To Convert {{VARIABLE-NAME}} >> VARIABLE-NAME
	
	for(var g=0; g<allElements.length; g++){
		
		//Reload Attributes
		for(var i=0; i<allElements[g].attributes.length; i++){
			var attrTxt = allElements[g].attributes[i].value,
				m = attrTxt.match(reg1);
			if(m !== null && m !== undefined){
				for(var j=0; j<m.length; j++){
					var p = m[j].replace(reg2,"");
					if(p in window.javaSnake.vars){
						attrTxt = attrTxt.replace(m[j],window.javaSnake.vars[p]);
					}
				}
				allElements[g].attributes[i].value = attrTxt;
			}
		}
		
		//Reload innerHTMLs
		var html = allElements[g].innerHTML,
			m = html.match(reg1);
		if(m !== null && m !== undefined){
			for(var i=0; i<m.length; i++){
				var p = m[i].replace(reg2,"");
				if(p in window.javaSnake.vars){
					html = html.replace(m[i],window.javaSnake.vars[p]);
				}
			}
			allElements[g].innerHTML = html;
		}
		
	}
	
};
window.javaSnake.onLoadUpdateVars = function(varName,varValue){
	
	window.javaSnake.addEvent(function(){
	
		var whiteSpacesVarNameReg = /[\s]+/gim,
				  validVarNameReg = /^[a-z|_|\$]/i;
		
		if(typeof varName === "string"){
			
			//Remove White Spaces
			varName = varName.replace(whiteSpacesVarNameReg,"");
			//Chack if it's an invalid var name
			var validName = varName.search(validVarNameReg);
			
			if(validName !== -1){
				
				window.javaSnake.vars[varName] = varValue;
				window.javaSnake.onLoadReloadVars();
				
			} else {
				
				window.javaSnake.error("javaSnake: Put A Valid Variable-Name (" + varName + ") In The First Argument Of updateVars() Function.");
				
			}
			
		} else if(typeof varName === "object"){
			
			for(var p in varName){
				
				//Remove White Spaces
				p = p.replace(whiteSpacesVarNameReg,"");
				//Chack if it's an invalid var name
				var validName = p.search(validVarNameReg);
				
				if(validName !== -1){
					
					window.javaSnake.vars[p] = varName[p];
					window.javaSnake.onLoadReloadVars();
					
				} else {
					
					window.javaSnake.error("javaSnake: Put A Valid Variable-Name (" + p + ") In The First Argument Of updateVars() Function.");
					
				}
				
			}
			
		} else {
			
			window.javaSnake.error("javaSnake: Put A String Or Object Value In The First Argument Of updateVars() Function.");
			
		}
	
	});
	
};
window.javaSnake.randomURLCode = function(len){
	
	len = (typeof len !== "number")? 12:len;
	
	const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$-+!.*'(),";
	
	var str = "",
		numArr,
		rand;
	
	for(var i=0; i<len; i++){
		numArr = new Uint8Array(1);
		window.crypto.getRandomValues(numArr);
		rand = Math.floor((73*numArr[0])/256);
		str += CHARS[rand];
	}
	
	return str;
	
};
window.javaSnake.randomCode = function(len,pattern){
	
	len = (typeof len !== "number")? 12:len;
	pattern = (typeof pattern !== "string")? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$":pattern;
	
	var str = "",
		numArr,
		rand;
	
	for(var i=0; i<len; i++){
		numArr = new Uint32Array(1);
		window.crypto.getRandomValues(numArr);
		rand = Math.floor((pattern.length*numArr[0])/4294967296);
		str += pattern[rand];
	}
	
	return str;
	
};

//End Of javaSnake In Object Mode
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
/*
 *	In The Name Of God
 *	javaSnake > JavaScript {For DOM Objects}
 *	By SMRSAN
 *	
 *	WebLog:
 *			http://smrsan.blogfa.com/
 *	WebSite:
 *			http://www.javaSnake.com/
 */

HTMLElement.prototype.c$$ = function (/*{Style Object} or "Style String"*/){
/*
 *	c$$ Function
 *	For Easier Style
 *	In  JavaScript
 */

	var props	= [],
		vals	 = [],
		returnProp = null;
	/*
	 *	Load Properties And Values
	 */
	for(var j=0; j<arguments.length; j++){ //ForEach Arg
		var style = arguments[j];
		if(typeof style == 'string'){
			
			var arr = style.split(/[\:|;]/g);
			for(var i=0; i<arr.length; i += 2) props.push(arr[i].replace(/ /g,""));
			for(var i=1; i<arr.length; i += 2) vals.push(arr[i]);
			
		} else if(typeof style == 'object'){
			for(var myStyleName in style){
				if(myStyleName in this.style){
					
					if(style[myStyleName].toLowerCase().trim() == "$get"){//Get Property Command
						returnProp = this.style[myStyleName];
						continue;
					}
					
					this.style[myStyleName] = style[myStyleName];
				}
			}
		}
	}
	/*
	 *	Do Styles On Element
	 */
	for(var j=0; j<props.length; j++){ //ForEach Style
		props[j] = props[j].toLowerCase();
		var p = S.styleToJs(props[j]);
		if(vals[j].toLowerCase().trim() == "$get"){//Get Property Command
			returnProp = this.style[p];
			continue;
		}
		if(p in this.style) this.style[p] = vals[j];
	}
	return returnProp;/*Properties Or Null*/
};
HTMLElement.prototype.css = function (){
/*
 *	Function For Set Some Style (Like jQuery Library)
 */
	for(var g=0; g<arguments.length; g++){
		
		if(typeof arguments[g] == 'object'){
			
			var styleObj = arguments[g];
				
			for(var myStyleName in styleObj){
				
				if(myStyleName in this.style){
					
					this.style[myStyleName] = styleObj[myStyleName];
					
				}
				
			}
			
		} else if(typeof arguments[g] == 'string'){
			
			if(typeof arguments[g+1] == 'string'){
				
				if(arguments[g] in this.style){
						
					this.style[arguments[g]] = arguments[g+1];
					
				}
				
			} else {
				
				if(arguments[g] in this.style){
					
					return this.style[arguments[g]];
					
				}
				
			}
			
		}
		
	}
};
/* MIT OpenSource License
 *
 * Copyright 2016-2017 javaSnake (By SMRSAN)
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software
 * and associated documentation files (the "Snake.js"),
 * to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the
 * following conditions:
 * The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions
 * of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/
