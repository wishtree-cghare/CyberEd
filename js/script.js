$(function(){
    $('.link').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('dot-elastic')
           
        }
    })
})



$('.toggle-btn').on('click', function() {
    $(this).toggleClass('arrow-active');
   
  });

  $('.toggle-btn').on('click', function(e) {
    e.preventDefault();
   
    if ($(this).hasClass('arrow-active')) {
       
     
      $('.sub-menu').slideDown(300);
      $('.sub-menu').css({
        "display" : "flex"
      })
    }
    else{
        
      $('.sub-menu').slideUp(300);
    }
  
  });

  $('.toggle-btn').on('click', function(e) {
    e.preventDefault();
   
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
      console.log('clickeddd')
      
      this.classList.toggle("course-content-head-active");

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

  $('.more-toggle-btn').on('click', function() {
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
  
    $('.menu-item a').each(function(){
    $(this).removeClass('categories-menu-item-active');

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
  
    $(document).mouseup(function (e) {
      $('.more-menus').slideUp(300)
      $('.logged-in-sub-menu').slideUp(300);
      $('.sub-menu').slideUp(300);


  })