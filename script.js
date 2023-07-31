   var urlLocation = "https://www.google.com/maps/place/11%C2%B032'44.6%22N+104%C2%B053'33.4%22E/@11.5377472,104.8939451,14.22z/data=!4m4!3m3!8m2!3d11.545711!4d104.892611?entry=ttu";
   document.getElementsByClassName("location")[0].innerHTML = `<a href="${urlLocation}"><i class="fa-solid fa-location-dot"></i> Find Store</a>`;
   var change = false;
    document.getElementById("d-menue").addEventListener("click",function() {
        if(change==false) {
            document.getElementsByClassName("dropdown-menue")[0].style.display="flex";
            change =! change;
        }else{
            document.getElementsByClassName("dropdown-menue")[0].style.display="none";
            change =! change;
        }
    })

    var storeLogo =`<a href="index.html"><img src="logo"></a>`;
    document.getElementsByClassName("display-logo")[0].innerHTML = storeLogo;

    var dropdownMenue = [
        {
            'keyDrop' : 'Home Appliances'
        },

        {
            'keyDrop' : 'Clothing'
        },

        {
            'keyDrop' : 'Phone'
        },

        {
            'keyDrop' : 'Computers'
        },

        {
            'keyDrop' : 'Beuty and Personcare'
        },

        {
            'keyDrop' : 'Book'
        },

        {
            'keyDrop' : 'Baby'
        },

        {
            'keyDrop' : 'Man Fashion'
        },

        {
            'keyDrop' : 'Digital Music'
        },

        {
            'keyDrop' : 'Elictornic'
        },

        {
            'keyDrop' : 'Deals'
        },

        {
            'keyDrop' : 'Books'
        },

        {
            'keyDrop' : 'Move and TV'
        },

        {
            'keyDrop' : 'kindle Store'
        },

        {
            'keyDrop' : 'Home & Family Care'
        },

        {
            'keyDrop' : 'Sport'
        },

        {
            'keyDrop' : 'Softwere'
        },

        {
            'keyDrop' : "Girl's Fashion"
        },

        {
            'keyDrop' : 'Art and Cratf'
        },

        {
            'keyDrop' : 'Toy and Game'
        },

    ];

    var getDropMenue = "";
    for(let i in dropdownMenue) {
        getDropMenue += `<li><a href="#">${dropdownMenue[i]["keyDrop"]}</a></li>`
    }
    document.getElementsByClassName("dropdown-menue")[0].innerHTML = `<ul>${getDropMenue}</ul>`;

    document.getElementsByClassName("get-language")[0].innerHTML = `
                <div class="english">
                    <img src="usFlag.webp" alt=""> 
                    English
                </div>
    `;
    document.getElementById("eg").addEventListener('click',function() {
        document.getElementsByClassName("get-language")[0].innerHTML = `
                <div class="english" id="eg">
                    <img src="usFlag.webp" alt=""> 
                    English
                </div>
    `;
    })

    document.getElementById("kh").addEventListener("click",function(){
        document.getElementsByClassName("get-language")[0].innerHTML = 
        `
        <div class="khmer" id="kh">
            <img src="Flag-Cambodia.webp" alt="">
            Khmer
        </div>
        `; 
    })


    document.getElementsByClassName("logo-mart")[0].innerHTML = storeLogo;


    document.getElementsByClassName("banner-fit")[0].innerHTML = `
                <h4>Sign up to <span>S-MART</span></h4>
                <h6>Well come to our store. When You sign up with  me you can find every thing you need.
                    and then you can post your product in my website we help you to find 
                    customers for you.
                </h6>
    `;

    document.getElementById("form-sing-up").addEventListener("click",function() {
        document.getElementsByClassName("display-form")[0].style.display="flex";
    })

    var formSignUp  = `
        <div class="sign-up-header">
            <h3>Sign UP</h3>
            <button class="btn close-form-btn btn-outline-secondary float-end" id="closeForm"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="First Name">
            <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Last Name">
            <label for="floatingInput">Last Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>                        
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="goto-login">Already a member? <span id="login-btn">Login</span></div>
        <button class="btn sumit-sign-up btn-primary">Sign UP</button>
        `;
    var formLogin  = `
        <div class="login-header"> 
            <h3>Login</h3>
            <button class="btn close-form-btn btn-outline-secondary float-end" id="closeFormLogin"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="@username">
            <label for="floatingInput">User Name</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="forget-password">Forget password?</div>
        <button class="btn sumit-sign-up btn-primary">LOGIN</button>
    `; 
    document.getElementsByClassName("form-signUp")[0].innerHTML = formSignUp;

    document.getElementById("login-btn").addEventListener("click",function(){
        document.getElementsByClassName("form-signUp")[0].innerHTML = formLogin;
            document.getElementById("closeFormLogin").addEventListener("click",function(){
                document.getElementsByClassName("display-form")[0].style.display="none";
        });
    });
    
        document.getElementById("closeForm").addEventListener("click",function(){
            document.getElementsByClassName("display-form")[0].style.display="none";
        })

        var cart = `<i class="fa-solid fa-cart-shopping"></i> Cart`;

        document.getElementsByClassName("goto-store")[0].innerHTML = cart;


        var menue = [
            {
                'submenue' : `<li id="clickToshow"><a href="#"><i class="fa-solid fa-bars"></i> All</a></li>`
            },
            {
                'submenue' : `<li><a href="#">Today's Deals</a></li>`
            },
            {
                'submenue' :  `<li><a href="#">Customer Sevice</a></li>`
            },
            {
                'submenue' : `<li><a href="#">Registry</a></li>`
            },
            {
                'submenue' : `<li><a href="#">Gift Cart</a></li>`
            },
            {
                'submenue' : `<li><a href="#">Sell</a></li>`
            },
        ];
        
        var getMenue = "";
        for(let i in menue) {
              getMenue += menue[i]["submenue"];
        }

        document.getElementsByClassName("menue")[0].innerHTML = `<ul>${getMenue}</ul>`;
        
        document.getElementById("clickToshow").addEventListener("click",function(){
            document.getElementsByClassName("display-all")[0].style.display="flex";
            document.getElementsByClassName("main-all-menue")[0].style.width="370px";
        });

        document.getElementById("disallMenue").addEventListener("click",function() {
            document.getElementsByClassName("display-all")[0].style.display="none";
            document.getElementsByClassName("main-all-menue")[0].style.width="0px";
        });
        
        document.getElementById("showFormMore").addEventListener("click",function(){
            document.getElementsByClassName("display-all")[0].style.display="none";
            document.getElementsByClassName("main-all-menue")[0].style.width="0px";
            document.getElementsByClassName("display-form")[0].style.display="flex";
        })

        var degitail = [
            {
                "keyDegi" : "S-Music"
            },
            {
                "keyDegi" : "Kindle E-reader & Book"
            },
            {
                "keyDegi" : "S-Sport"
            },
        ];
        var getDegitail = "";
        for(let i in degitail) {
            getDegitail += `<li><a href="#">${degitail[i]["keyDegi"]}</a> <i class="fa-solid fa-chevron-right"></i></li>`
        }

        document.getElementsByClassName("degital-contain")[0].innerHTML = `<h5>Digital Content & Devices</h5><hr>${getDegitail}`;

        var shopByDepartment = [
            {
                "keyShope" : "Elictronic"
            },
            {
                "keyShope" : "Computers"
            },
            {
                "keyShope" : "Smart Home"
            },
            {
                "keyShope" : "Arts and Craft"
            }
           
        ];

        var moreShopeDepartment = [
            {
                "keyShope" : "Elictronic"
            },
            {
                "keyShope" : "Computers"
            },
            {
                "keyShope" : "Smart Home"
            },
            {
                "keyShope" : "Arts and Craft"
            },
            {
                "keyShope" : "Aotumotive"
            },
            {
                "keyShope" : "Baby"
            },
            {
                "keyShope" : "Bseuty and Person care"
            },
            {
                "keyShope" : "Women's Fashion"
            },
            {
                "keyShope" : "Men's Fashios"
            },
            {
                "keyShope" : "Girl's Fashion"
            },
            {
                "keyShope" : "Boy's Fashion"
            },
            {
                "keyShope" : "Heath and household"
            },
            {
                "keyShope" : "Home and kitchen"
            },
            {
                "keyShope" : "Industrial and Scientific"
            },
            {
                "keyShope" : "Luggage"
            },
            {
                "keyShope" : "Movies & televition"
            },
            {
                "keyShope" : "Pet Suplies"
            },
            {
                "keyShope" : "Software"
            },
            {
                "keyShope" : "Sport and Outdoors"
            },
            {
                "keyShope" : "Tool and Home Improvement"
            },
            {
                "keyShope" : "Toy & Game"
            },
            {
                "keyShope" : "Video Game"
            }
        ];

        var getShopDepartment = "";
        for(let i in shopByDepartment) {
            getShopDepartment += `<li><a href="#">${shopByDepartment[i]["keyShope"]}</a> <i class="fa-solid fa-chevron-right"></i></li>`
        }
        
        document.getElementsByClassName("shope-department-seemore")[0].innerHTML = `<h5>Shop By Department</h5><hr>${getShopDepartment}<li id="seemore"><a href="#">See More</a><i class="fa-solid fa-chevron-down"></i></li>`;
        
        var getMoreshope = "";
        for(let i in moreShopeDepartment) {
            getMoreshope += `<li><a href="#">${moreShopeDepartment[i]["keyShope"]}</a> <i class="fa-solid fa-chevron-right"></i></li>`
        }
         document.getElementsByClassName("shope-department-seelees")[0].innerHTML = ` <h5>Shop By Department</h5><hr>${getMoreshope}<li id="seelees"><a href="">See Lees</a><i class="fa-solid fa-chevron-up"></i></li>`;



        document.getElementById("seemore").addEventListener("click",function(){
             document.getElementsByClassName("shope-department-seelees")[0].style.display="contents";    
             document.getElementsByClassName("shope-department-seemore")[0].style.display="none";
        });
           
        document.getElementById("seelees").addEventListener("click",function() {
            document.getElementsByClassName("shope-department-seelees")[0].style.display="none";    
            document.getElementsByClassName("shope-department-seemore")[0].style.display="contents";
        });


        var programAndFeature = [
            {
                "keyProgram" : "Gift Card"
            },
            {
                "keyProgram" : "Shop by interest"
            },
            {
                "keyProgram" : "Live"
            },
            {
                "keyProgram" : "International Shopping"
            },
        ];

        var getProgramFeature = "";
        for(let i in programAndFeature) {
            getProgramFeature += `<li><a href="#">${programAndFeature[i]["keyProgram"]}</a><i class="fa-solid fa-chevron-right"></i></li>`;
        }
        document.getElementsByClassName("program-and-feature")[0].innerHTML = `<h5>Program and Feature</h5> <hr> ${getProgramFeature}`;
        
        var helpAndSetting = [
            {
               "keyHelpAndSetting":`<h5>Help & Setting</h5><hr>`
            },
            {
                "keyHelpAndSetting":`<li><a href="#">Your account</a></li>`
            },
            {
                "keyHelpAndSetting":`<li><a href="#"><i class="fa-solid fa-earth-americas"></i> English</a></li>`
            },
            {
                "keyHelpAndSetting":`<li><a href="#"><img src="usFlag.webp" alt="">United states</a></li>`
            },
            {
                "keyHelpAndSetting":`<li><a href="#">customer Service</a></li>`
            },
            {
                "keyHelpAndSetting":`<li id="clciktosignup"><a href="#">Sign Up</a></li>`
            },
        ];
        var gethelpAndSetting = "";
        for(let i in helpAndSetting){
            gethelpAndSetting += helpAndSetting[i]["keyHelpAndSetting"];
        }
        document.getElementsByClassName("help-and-setting")[0].innerHTML = gethelpAndSetting;
        document.getElementById("clciktosignup").addEventListener("click",function(){
            document.getElementsByClassName("display-all")[0].style.display="none";
            document.getElementsByClassName("main-all-menue")[0].style.width="0px";
            document.getElementsByClassName("display-form")[0].style.display="flex";
        })


      
        const url = "https://fakestoreapi.com/products?limit=18";
        var txt = '';
        const fetchData =async()=>{
             try {
                const response = await fetch(url);
                const data = await response.json();
                for(let item of data) {
                    txt += `
                        <div class="card">
                            <div class="image-box">
                                <img src="${item.image}" alt="">
                            </div>
                            <div class="detail-box">
                                <h5>${item.title}</h5>
                                <h6>Price : ${item.price}<span>$</span></h6>
                                <p>Rath: ${item.rating['rate']}</p>
                            </div>
                        </div>`;
                }
                document.getElementsByClassName("item-box")[0].innerHTML = txt; 
            }catch(err){
                console.log(err);
            }
        }
        fetchData();

    document.getElementsByClassName("left-box")[0].innerHTML = storeLogo;
    document.getElementsByClassName("middle-box")[0].innerHTML = `<h3>Location</h3>
    <h4>សង្កាត់​ស្ទឹងមានជ័យ, ភ្នំពេញ</h4>
    <a href="${urlLocation}"><i class="fa-solid fa-location-dot"></i> Google mape</a>`;
   const urltiktok = "https://www.tiktok.com/@hengmenghoy/video/7216642068792233218?_r=1&_t=8ch6UbAFvXU"
   const urlyoutube = "https://www.youtube.com/@luonverak"; 
   var socail = [
        {
           keySocail : `<a href="${urltiktok}"><i class="fa-brands fa-tiktok"></i></a>`
        },
        {
            keySocail : `<a href="https://web.facebook.com/profile.php?id=100091773552422"><i class="fa-brands fa-facebook"></i></a>`
        },
        {
            keySocail : `<a href="${urlyoutube}"><i class="fa-brands fa-youtube"></i></a>`
        },
        {
            keySocail : `<a href="#"><i class="fa-brands fa-instagram"></i></a>`
        },
    ];
    var getSocail = "";
    for(let i in socail) {
         getSocail += socail[i]["keySocail"];
    }
    document.getElementsByClassName("right-box")[0].innerHTML = `<h3>Socail Media</h3>${getSocail}`;


    const search = async()=> {
        const respone = await fetch(url);
        const data = await respone.json();
        const list = [...new Set(data.map((item)=>{
              return item;
        }))];
        console.log(list);
        document.getElementById("search").addEventListener("keyup",(e)=>{
            const searchData = e.target.value.toLowerCase();
            const filterData = list.filter((item)=>{
                return item.title.toLowerCase().includes(searchData);
            });
            displayItem(filterData);
        });
        const displayItem =((item)=>{
            document.getElementById("item-box-id").innerHTML = item.map((item)=>{
                const {image,title,price,rating} = item;
                console.log(item);
                return (`
                    <div class="card">
                        <div class="image-box">
                            <img src="${image}" alt="">
                        </div>
                        <div class="detail-box">
                            <h5>${title}</h5>
                            <h6>Price : ${price}<span>$</span></h6>
                            <p>Rath: ${rating['rate']}</p>
                        </div>
                    </div>`);
            });
        });
    }
    search();


    // const search = async()=>{
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     const list = [...new Set(data.map((item)=>{
    //         return item;
    //     }))];
    //     console.log(list)
    //     document.getElementById("search").addEventListener("keyup",(e)=>{
    //         const searchData = e.target.value.toLowerCase();
    //         const filterData = list.filter((item)=>{
    //             return item.title.toLowerCase().includes(searchData);
    //         });
    //         displayItem(filterData);
    //     });
    //     const displayItem=((item)=>{
    //         document.getElementById('root').innerHTML = item.map((item)=>{
    //             const {image,title,price,rating}=item;
    //             console.log(item)
    //             return (`
    //                     <div class="card">
    //                         <div class="image-box">
    //                             <img src="${image}" alt="">
    //                         </div>
    //                         <div class="detail-box">
    //                             <h5>${title}</h5>
    //                             <h6>Price : ${price}<span>$</span></h6>
    //                             <p>Rath: ${rating['rate']}</p>
    //                         </div>
    //                     </div>
    //             `);
    //         }).json('');
    //     })
    // }
    // search();