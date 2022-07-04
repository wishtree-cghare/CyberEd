


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











  function toggleContent(content) {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + '200px';
    }
  }


  // collapse all open content
  // close previos div on open of next div 
  // collapse of head


function collapseAllOpenContent() {
  const colls_head = document.getElementsByClassName('head');
  for (const coll_head of colls_head) {
    if (coll_head.classList.contains('active-head')) {
      coll_head.classList.remove('active-head');
      toggleContent(coll_head.nextElementSibling);
    }
  }
}


const colls = document.getElementsByClassName('head');
for (const coll_head of colls) {
  coll_head.addEventListener('click', function() {
    if (!this.classList.contains('active-head')) {
      collapseAllOpenContent();
    }
    this.classList.toggle('active-head');
    toggleContent(this.nextElementSibling);
  });
}



// collapse of content
function collapseAllOpenContent_collapse() {
  const colls_collapsible = document.getElementsByClassName('collapsible');
  for (const coll_collapsible of colls_collapsible) {
    if (coll_collapsible.classList.contains('active')) {
      coll_collapsible.classList.remove('active');
      toggleContent(coll_collapsible.nextElementSibling);
    }
  }
}

const colls_collapse = document.getElementsByClassName('collapsible');
for (const coll_collapsible of colls_collapse) {
  coll_collapsible.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      collapseAllOpenContent_collapse();
    }
    this.classList.toggle('active');
    toggleContent(this.nextElementSibling);
  });
}


// course content page collapse

function collapseAllOpenContent_course_content_head(){
  const colls_course_content_head = document.getElementsByClassName('course-content-head');
  for (const coll_course_content_head of colls_course_content_head) {
    if (coll_course_content_head.classList.contains('course-content-head-active')) {
      coll_course_content_head.classList.remove('course-content-head-active');
      toggleContent(coll_course_content_head.nextElementSibling);
    }
  }
}

  const columns2 = document.getElementsByClassName("course-content-head");
  for (const course_content_head_coll of columns2) {

    course_content_head_coll.addEventListener("click", function() {
      
      if (!this.classList.contains('course-content-head-active')) {
        collapseAllOpenContent_course_content_head();
      }
      this.classList.toggle('course-content-head-active');
      toggleContent(this.nextElementSibling);
    
    })
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
    }
   

    })
    $(this).addClass('tabs-active');

  })


  $('.course_content_tab').on('click', function() {
  
    $('.course_content_tab').each(function(){
      if ($(this).hasClass('course-content-tab-active')){
      $(".course_content_tab").removeClass('course-content-tab-active')
    };
   

    })
    $(this).addClass('course-content-tab-active');

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



  $(document).mouseup(function(e) 
{

 
    var container = $(".more-menus");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        $('.more-toggle-btn').removeClass('more-arrow-active')
    }
  
    
});


