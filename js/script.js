$('.sub-menus li').on('click', function() 
  {
    
   
    $('.sub-menus').each(function(){
      
      $('.sub-menus li').removeClass('highlight');
      $(".dot").remove();

     
    })  
    

    const span = document.createElement("span");
    console.log(span)
    span.setAttribute("class","dot")
    console.log($(this).attr('id'))
    const element = document.getElementById($(this).attr('id'));

    console.log(element)
  element.appendChild(span);


      $(this).addClass('highlight');
    
  
})

// *************************************************8

$('.nav-list-left li').on('click', function() 
  {
    
    
   
    $('.nav-list-left').each(function(){
      
      $('.nav-list-left li').removeClass('highlight');
     
      $(".dot1").remove();
          
    })
    

    
      //add span
      
     

        const span = document.createElement("span");
    
        span.setAttribute("class","dot1")
       
        const element = document.getElementById($(this).attr('id'));
        
        element.appendChild(span);
    
        $(this).addClass('highlight');
    
  
})




$('.categories').on('click', function() {
    $(this).toggleClass('arrow-active');
   
  });

  $('.nav-list-left li').on('click', function(e) {
    e.preventDefault();
   
   
    if($(this).hasClass('arrow-active')) {
      
      $('.sub-menu').slideDown(300);
      $('.sub-menu').css({
        "display" : "flex"
      })
    }
    else{
    $('.sub-menu').slideUp(300);

    $('.nav-list-left li').removeClass('arrow-active')
  
  }
  
  });

  $('.nav-list-left li').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('arrow-active')) {
       
      
      $('.logged-in-sub-menu').slideDown(300);
      $('.section').css({
        "padding-top" : "110px",
        "transition" : "all 400ms"
      })

      $('.progress-status-section').css({
        "padding-top" : "45px",
        "transition" : "all 400ms"
      })

      $('.course-detail-page-section').css({
        "padding-top" : "45px",
        "transition" : "all 400ms"
      })
    }
    else{
        
      $('.logged-in-sub-menu').slideUp(300);
      $('.section').css({
        "padding-top" : "60px"
      })

      $('.progress-status-section').css({
        "padding-top" : "0",
        "transition" : "all 400ms"
      })

      $('.course-detail-page-section').css({
        "padding-top" : "0",
        "transition" : "all 400ms"
      })

    $('.nav-list-left li').removeClass('arrow-active')

    }
  
  });






  // collapsible
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }  


  var columns = document.getElementsByClassName("head");
  var j;
  
  for (j = 0; j < columns.length; j++) {
    columns[j].addEventListener("click", function() {
      this.classList.toggle("head-active");

      var content = this.nextElementSibling;
      console.log(content)
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        console.log( content.scrollHeight)
        content.style.maxHeight = (content.scrollHeight + 200 ) + "px";
      } 
    });
  } 


  var columns2 = document.getElementsByClassName("course-content-head");
  console.log(columns2)
  var k;
  
  for (k = 0; k < columns2.length; k++) {
    columns2[k].addEventListener("click", function() {
      
      
      this.classList.toggle("course-content-head-active");

      var content = this.nextElementSibling;
      console.log(content)
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
       
        content.style.maxHeight = (content.scrollHeight + 200 ) + "px";
      } 
    });
  } 

  const tabs = document.querySelectorAll('[data-tab-value]')
  const tabInfos = document.querySelectorAll('[data-tab-info]')

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const target = document
              .querySelector(tab.dataset.tabValue);

          tabInfos.forEach(tabInfo => {
              tabInfo.classList.remove('tab-active')
          })
          target.classList.add('tab-active');
      })
  })





  $('.status').on('click', function() {
    
    $('.status').each(function(){
      if ($(this).hasClass('progress-status-list-active')){
      $(".status").removeClass('progress-status-list-active')
    };
   

    })
    $(this).addClass('progress-status-list-active');

  })

  
  $('.tab').on('click', function() {
  
    $('.tab').each(function(){
      if ($(this).hasClass('tabs-active')){
      $(".tab").removeClass('tabs-active')
    };
   

    })
    $(this).addClass('tabs-active');

  })

  $('.more-toggle-btn').on('click', function(e) {
    e.preventDefault();
    

    $(this).toggleClass('more-arrow-active');
   
  });

  $('.more-toggle-btn').on('click', function(e) {
    e.preventDefault();
   
  
    if ($(this).hasClass('more-arrow-active')) {
       
     
      $('.more-menus').slideDown(300);
      
    }
    else{
        
      $('.more-menus').slideUp(300);
    }
  
  });


  $('.more-sub-menus-item a').on('click', function() {
    $('.more-sub-menus-item a').each(function(){
      if ($(this).hasClass('more-sub-menus-active')){
    

      $(".more-sub-menus a").removeClass('more-sub-menus-active')
    };
   

    })
    $(this).addClass('more-sub-menus-active');

  })


  // ********************************************


  $('.menu-item a').on('click', function() {
  
    $('.menu-item').each(function(){
    $('.menu-item a').removeClass('categories-menu-item-active');

    })
   
    $(this).addClass('categories-menu-item-active');

   
  });

  $(function(){
    
   
      $(".sub-category").hide();
      $("#network-security").show();

      $(".menu-item").children().click(
        function(){
          var divname = $(this).attr('href');
         
          $(divname).show().siblings().hide();
        }
      )
      
    })
  
  //   $(document).mouseup(function (e) {
  //     $('.more-menus').slideUp(300)
  //     $('.logged-in-sub-menu').slideUp(300);
  //     $('.sub-menu').slideUp(300);


  // })


  $('.sub-category .cat').on('click', function() {
  
    $('.sub-category .cat').each(function(){
      if ($(this).hasClass('your-interests')){
      $(".sub-category .cat").removeClass('your-interests')
    };
   

    })
    $(this).addClass('your-interests');

  })


  // stepper

  $(".next-btn").click(function () {
    var current_tab = $(this).parent();
    var next_tab = $(this).parent().next();

    current_tab.hide();
    next_tab.show();
    $("#progressbar li").each(function () {
      $(this).removeClass("active-step");
    });
    $("#progressbar li").eq($("fieldset").index(next_tab)).addClass("active-step");
    $("#progressbar li")
      .eq($("fieldset").index(current_tab))
      .addClass("completed");
    $("#progressbar li").each(function () {
      if ($(this).hasClass("completed")) {
        $("#progressbar li.completed span:first-child").text("");
        $("#progressbar li.completed span:first-child").html(
          "<i class='fa-solid fa-check'></i>"
        );
      }
    });
  });

  
  const searchBtn = document.querySelector(".search-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const searchBox = document.querySelector(".search-box");
  
  searchBtn.onclick = () => {
    searchBox.classList.add("search-active");
  }
  
  cancelBtn.onclick = () => {
    searchBox.classList.remove("search-active");
  }
