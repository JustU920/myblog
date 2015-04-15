/**
 * 初始化方法。
 *
 * @param isEdit
 *            是否可编辑
 * @param point
 *            分数
 * @param getValue
 *			  回调函数
 * @param myPoint
 *            评分div的ID参数
 * @author zhoumin
 */
function starRatingInit(isEdit, point, getValue, myPoint){
	//初始化样式
	ratingInit(myPoint);
	//设置初值
	setValue(point, myPoint);
	//是否可编辑
	if(isEdit == true || isEdit == "true"){
		ulBindInit(point, getValue, myPoint);
	}
}

/**
 * 动态设置是否可以继续评分。
 *
 * @param myPoint
 *            评分div的ID参数
 * @author zhoumin
 */
function setDisabel(myPoint){
	var myLi = $("div[id$='" + myPoint + "']>div>div>ul>li");
	myLi.unbind();
}

function ratingInit(myPoint){
	var divOutside = $("div[id$='" + myPoint + "']");
	var divs =             "<div class='rating_cont'>"
							  +"<div class='rating_btns'><ul>"
									+"<li>0</li>"
									+"<li>0.5</li>"
									+"<li>1.0</li>"
									+"<li>1.5</li>"
									+"<li>2.0</li>"
									+"<li>2.5</li>"
									+"<li>3.0</li>"
									+"<li>3.5</li>"
									+"<li>4.0</li>"
									+"<li>4.5</li>"
									+"<li>5.0</li>"
									+"</ul></div>"
							+"<div class='rating_on'></div>"
						+"</div>"
						+"<input class='rates'/>";
	divOutside.html(divs);
}

function ulBindInit(point, getValue, myPoint){
	var myLi = $("div[id$='" + myPoint + "']>div>div>ul>li");
	
	// hover
	myLi.hover(function(){	
		setValue($(this).text() * 2, myPoint);
	});	
	
	// mouseout
	myLi.mouseout(function(){
		setValue(point, myPoint);
	});
	
	//click
	if (null != getValue) {
		myLi.click(function(){
			point =  $(this).text() * 2;
			//回调函数
			getValue(point.toFixed(1),myPoint);	
		});
	}
}

function setValue(point,myPoint){
	var div0 = $("div[id$='" + myPoint + "']>div>div[class$='rating_on']");
	var div1 = $("div[id$='" + myPoint + "']>input");
	div0.css('width', point.toFixed(1)*8 + "px");	
	div1.val(point.toFixed(1));
}
