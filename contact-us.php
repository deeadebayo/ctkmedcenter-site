<?php
$result = $name = $email = $phone = $message = "";
$errName = $errEmail = $errPhone = $errMessage = "";
if(isset($_POST['submit']) && !empty($_POST['submit'])):
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
        //your site secret key
        $secret = '6Ldg5g0TAAAAAK-voiodGxe0SL_teFzjiM2qa3Ok';
        //get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success):
            if (isset($_POST["submit"])) {
                $name = $_POST['name'];
                $email = $_POST['email'];
                $phone = $_POST['phone'];
                $message = $_POST['message'];
                 //valid address on your web server
                $from = 'webmaster@ctkmedcenter.com';
                //your email address where you wish to receive mail
                $to = 'info@ctkmedcenter.com';
                $subject = 'Feedback from contact form';
                $headers = "From:$from\r\nReply-to:$email";
                $body = "From: $name\n E-Mail: $email\n Phone: $phone\n Message: $message";
        // Check if name is entered
        if (empty($_POST["name"])) {
        $errName = "Please enter your name.";
        } else {
            $name = test_input($_POST["name"]);
        }
        // Check if email is entered
        if (empty($_POST["email"])) {
        $errEmail = "Please enter your email address.";
        } else {
            $email = test_input($_POST["email"]);
            // check if e-mail address is valid format
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              $errEmail = "Invalid email format.";
            }
        }
        // Check if phone is entered although it is not required so we don't need error message
        if (empty($_POST["phone"])) {
        $phone = "";
        } else {
            $phone = test_input($_POST["phone"]);
        }
        //Check if message is entered
        if (empty($_POST["message"])) {
        $errMessage = "Please enter your message.";
        } else {
            $message = test_input($_POST["message"]);
        }
        // If there are no errors, send the email & output results to the form
        if (!$errName && !$errEmail && !$errPhone &&  !$errMessage) {
            if (mail ($to, $subject, $body, $from)) {
                $result='<div class="alert alert-success"><h2 class="as-heading-headline text-center"><span class="glyphicon glyphicon-ok"></span> Message sent!</h2><p class="as-para-intro">Thank you for contacting us. Someone from our office will be in touch with you soon.</p></div>';
            } else {
                $result='<div class="alert alert-danger"><h2 class="as-heading-headline text-center"><span class="glyphicon glyphicon-warning-sign"></span> Sorry there was a form processing error.</h2> <p class="as-para-intro">Please try again later.</p></div>';
               }
            }
        }
        else {
            $errMessage = 'Robot verification failed, please try again.';
        }
        endif;
    else:
        $errMessage = 'Please click on the reCAPTCHA box below.';
    endif;
endif;
//sanitize data inputs
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   $data = (filter_var($data, FILTER_SANITIZE_STRING));
   return $data;
}
?>
<!DOCTYPE html>
<!-- Microdata markup added by Google Structured Data Markup Helper. -->
<html lang="en">
<head>
    <title>Contact Us - Christ the King Medical Center</title>
    <meta charset="utf-8">
    <meta name="description" content="Christ the King Medical Center - 3531 Highway 81S, Loganville, GA, 30052. Phone: (770) 554-8015. Fax: (770) 554-8042. Email: info@ctkmedcenter.com">
    <meta name="geo.region" content="US-GA" />
    <meta name="geo.placename" content="Loganville" />
    <meta name="geo.position" content="33.82126;-83.876165" />
    <meta name="ICBM" content="33.82126, -83.876165" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/boomz/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="/boomz/css/animate.css" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="/boomz/css/mine.css" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/ico" href="/favicon.ico">
    <style>
        body {
            max-width: 100%
        }
    </style>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>var pageTitle = "Contact Us";</script>
</head>
<body>
    <div itemscope itemtype="http://schema.org/LocalBusiness" id="wrap">
        <div class="top-bar hidden-xs hidden-sm visible-md visible-lg">
            <div class="nav-container">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                      <div id="displayMoment" class="top-number"></div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <div class="social">
                        <div class="search">
                          <form role="form">
                            <!-- i.fa.fa-search-->
                            <!-- input(type='text', class='search-form', autocomplete='off', placeholder='Search')-->
                            <!-- | &nbsp; &nbsp; &nbsp; &nbsp;--><span class="top-number"><a href="tel:7705548015" class="link" style="color:white;"><i class="fa fa-mobile nounderline"></i> Phone: 770 554 8015 &nbsp; &nbsp;</a><a href="mailto:info@ctkmedcenter.com?subject=General%20Inquiry" class="link" style="color:white;"><i class="fa fa-envelope nounderline"></i> info@ctkmedcenter.com</a></span>
                          </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav role="banner" id="nav" class="navbar navbar-inverse">
        <div class="nav-container">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" aria-label="toggle menu" data-target=".navbar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand hidden-xs hidden-sm"><img itemprop="image" src="/content/hosted_images/Logo-words.png" alt="ctkmc brand logo" class="img-responsive brand-logo"></a>
            <!-- in the previous 'a', title='ctkmc brand logo'--><a href="/" class="navbar-brand hidden-md hidden-lg"><img src="/content/hosted_images/Logo-words.png" alt="logo" title="ctkmc brand logo" class="img-responsive"></a>
          </div>
          <div class="collapse navbar-collapse nav-from-right">
            <ul class="nav navbar-nav text-uppercase">
              <li><a href="/"><span class="hvr-underline-reveal">Home</span></a></li>
              <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><span class="hvr-underline-reveal health">Our Services&nbsp;<i class="fa fa-angle-right rotate-nav-icon-health"></i></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/our-services">Medical Services</a></li>
                  <li><a href="/health-info/allergy-testing">Allergy Testing</a></li>
                  <li><a href="/health-info/health-screening">Health Screenings</a></li>
                  <li><a href="/health-info/lifevantage">LifeVantage Products</a></li>
                  <li><a href="/health-info/strawberry-laser">Strawberry Laser</a></li>
                  <li><a href="/health-info/travel-medicine">Travel Medicine</a></li>
                </ul>
              </li>
              <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><span class="hvr-underline-reveal pres">Patient Resources&nbsp;<i class="fa fa-angle-right rotate-nav-icon"></i></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/patient-resources/new-patients">Your First Visit</a></li>
                  <li><a href="/patient-resources/faqs">FAQs</a></li>
                  <li><a href="/patient-resources/forms-and-records">Forms & Records</a></li>
                  <li><a href="/patient-resources/insurance-info">Insurance & Billing</a></li>
                  <li><a href="/patient-resources/release-of-medical-info">Release of Medical Info</a></li>
                  <li><a href="/patient-resources/online-medical-records">Online Medical Records</a></li>
                </ul>
              </li>
              <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><span class="hvr-underline-reveal about">About&nbsp;<i class="fa fa-angle-right rotate-nav-icon-about"></i></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/about/our-doctor">Our Doctor</a></li>
                  <li><a href="/about/what-to-expect">What to Expect</a></li>
                </ul>
              </li>
              <li class="active"><a href="/contact-us.php"><span class="hvr-underline-reveal">Contact Us</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <div class="fluid-container page-title-outer-box-con">
            <div class="page-title-box">
                <h1 id="fittext1" class="page-title"><span class="emphasize-this">Contact</span> us</h1>
                <h4 class="page-title-tagline">We'd love to hear from you</h4>
            </div>
        </div>
        <br>
        <br>
        <div class="full-container">
            <div class="row">
                <section id="reach-us" style="margin:0 0 1.5em 0">
                    <div class="col-md-4">
                        <h2 class="text-center as-heading-headline-contact-us"><i class="fa fa-paper-plane-o nounderline"></i> How to Reach Us</h2>
                        <br>
                        <p>Please use the following contact form if you have any general questions concerning our services or our clinic.</p>
                        <p>We will respond to your message within the next business day. For a more immediate response, feel free to call us during our normal business hours located in the middle of this page.</p>
                        <p>We are located in the Lakeside Commons Office Park. The Park is off the intersection of Highway 81 and Highway 78, shortly after you see Meridian Park (landmark is a big lake). When you enter the Office Park, you'll see our office at the furthest back right.</p>
                        <p><a href="#reference-map" class="link">Below</a> you can find a visual reference map to get to our office.</p>
                    </div>
                </section>
                <section id="info" style="margin:0 0 1.5em 0">
                    <div class="col-md-4">
                        <h2 class="text-center as-heading-headline-contact-us"><i class="fa fa-question-circle nounderline"></i> Address</h2>
                        <br>
                        <p>
                            <address>
              <strong>Christ the King Medical Center</strong><br>
              3531 Highway 81 South<br>
              Suite #3531-3533<br>
              Loganville, GA 30052<br>
              <a href="https://www.google.com/maps/place/Christ+the+King+Medical+Center/@33.82128,-83.876151,252m/data=!3m2!1e3!4b1!4m2!3m1!1s0x88f5c62e6c7e0927:0x160b0890eb99cbc8!6m1!1e1" class="link" target="blank"><small>Click for navigation</small></a>
            </address>
                        </p>
                        <br>
                        <p>
                            <abbr title="Telephone">Call:</abbr> <a href="tel:7705548015" class="link">770.554.8015</a>
                            <br>
                            <abbr title="Fax">Fax:</abbr> 770.554.8042
                            <br>
                            <abbr title="Email">Email:</abbr><a href="mailto:info@ctkmedcenter.com?subject=General%20Inquiry" class="link"> info@ctkmedcenter.com</a>
                            <br>
                        </p>
                        <br>
                        <p>
                            <strong>Office Hours</strong>
                            <br> Walk-ins always accepted
                            <br> Monday — Friday: <strong>9:30 AM – 6 PM</strong>
                            <br> Saturday & Sunday: <strong>Closed</strong>
                            <br>
                        </p>
                    </div>
                </section>
                <section id="email-us">
                    <div class="col-md-4">
                        <h2 class="text-center as-heading-headline-contact-us"><i class="fa fa-envelope-o nounderline"></i> Mail Us</h2>
                        <br>
                        <div class="row">
                            <!--begin HTML Form-->
                            <form name="contact" role="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                                <!--when submit button is clicked, show results here-->
                                <div class="form-group">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                                    <?php echo $result;?>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Your Name</label>
                                    <input type="text" name="name" id="name" placeholder="First &amp; Last Name" required class="form-control" value="<?php echo $name;?>">
                                    <span class="required small"><?php echo $errName;?></span>
                                </div>
                                <div class="form-group">
                                    <label for="email">Your Email</label>
                                    <input type="text" id="email" name="email" placeholder="Where can we email you back?" class="form-control" value="<?php echo $email;?>">
                                    <span class="required small"><?php echo $errEmail;?></span>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Your Phone Number</label>
                                    <input type="tel" id="number" name="phone" placeholder="(xxx) xxx-xxxx" required class="form-control" value="<?php echo $phone;?>">
                                    <span class="required small"><?php echo $errPhone;?></span>
                                </div>
                                <div class="form-group">
                                    <label for="type">Reason for contact (select from list)</label>
                                    <select name="type" style="cursor:pointer" class="form-control">
                                        <option value="general">General question or comment</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="website">Report a problem with webpage</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea name="message" placeholder="What's on your mind? We'll respond to you as soon as possible." rows="4" required class="form-control"><?php echo $message;?></textarea>
                                    <span class="required small"><?php echo $errMessage;?></span>
                                </div>
                                <p class="text-center text-danger">**Do not use this form to send personal medical information
                                    <a data-toggle="modal" data-target=".read-more-modal" class="link">
                                        <u style="display:inline-block">Read More</u></a>**</p>
                                <div tabindex="-1" role="dialog" class="modal fade read-more-modal">
                                    <div class="modal-dialog modal-lg">
                                        <div style="padding:10px" class="modal-content">
                                            <p class="as-para">Before submitting a question or comment, please be aware of the following information:</p>
                                            <p class="as-para">We're sorry but we cannot advise people about their medical conditions without an examination by one of our physicians. This email service is not intended for medical inquiries and is monitored only during normal business hours. If you want to contact CTKMC about a medical concern, the best way to do this is by telephone: <a href="tel:7705548015" class="link">(770) 554-8015</a></p>
                                            <p>The information contained in this website is not a substitution for medical evaluation or diagnosis. If you have a question about a medical procedure or diagnosis, please consult your physician. If you are experiencing a medical emergency, please call 911. Non-medical inquiries will be answered in a timely manner.</p>
                                            <p>Please do not use this e-mail address for billing inquiries. For those inquiries, please call us at <a href="tel:7705548015" class="link">(770) 554-8015</a>.</p>
                                            <p>Due to confidentiality regulations, no requests for medical records can be accepted online. Please call the office at <a href="tel:7705548015" class="link">(770) 554-8015</a></p>
                                            <div class="modal-footer">
                                                <button type="button" data-dismiss="modal" class="btn btn-danger">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="span text-center form-group">
                                    <div class="g-recaptcha col-xs-12" data-sitekey="6Ldg5g0TAAAAADREc1gaCz9YKKuZczAG0HBieEAJ"></div>
                                    <input type="submit" name="submit" id="submit" value="SUBMIT" class="btn btn-hero">
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <br>
        <section id="reference-map">
            <div class="full-container">
                <div>
                    <h2 class="as-heading-headline-smaller"><i class="fa fa-road nounderline"></i> Roadmap</h2>
                </div>
                <div id="map-container"></div>
            </div>
        </section>
        <br>
        <br>
        <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script>
            function init_map() {
                var location = new google.maps.LatLng(33.82128, -83.876151);
                var mapoptions = {
                    center: location,
                    zoom: 14
                };
                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: "CTKMC"
                });
                var map = new google.maps.Map(document.getElementById("map-container"),
                    mapoptions);

                marker.setMap(map);
            }
            google.maps.event.addDomListener(window, 'load', init_map);
        </script>
        <div id="push"></div>

        <span itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification">
<span itemprop="dayOfWeek" itemscope itemtype="http://schema.org/DayOfWeek">
<meta itemprop="name" content="Mo-Fr"></span></span>
<meta itemprop="url" content="http://www.ctkmedcenter.com/">

    </div>
    <div id="toTop" style="display:block;fontSize:.933em" class="btn btn-info hidden-xs"><i class="fa fa-arrow-up"></i>Top</div>
    <section id="footer" class="page-footer">
        <div style="padding:10px 15px 10px 15px" class="container">
            <div class="row">
                <h4 class="text-center"><a href="/" class="link">
          <p>Christ the King Medical Center</p></a></h4>
            </div>
            <div class="row footer-row">
                <p class="text-center"><strong><a href="tel:7705548015" class="link">770-554-8015</a>  |  <a href="/contact-us.php" class="link">Get Directions</a></strong> | <strong><a href="mailto:info@ctkmedcenter.com?subject=General%20Inquiry" class="link"> Email Us</a></strong></p>
            </div>
            <div class="row">
                <div class="col-md-4 col-xs-12 text-center">
                    <p>© Copyright Christ the King Healthcare 2015</p>
                </div>
                <div class="col-md-4 col-xs-12 text-center">
                    <p>All rights reserved.</p>
                </div>
                <div class="col-md-4 col-xs-12 text-center">
                    <p><a href="http://lmgtfy.com/?q=linkedin.com%2Fin%2Fdeeadebayo&amp;l=1" class="link">Website by Dee Adebayo</a></p>
                </div>
            </div>
        </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="/boomz/js/bootstrap.js"></script>
    <script src="/boomz/js/mine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
    <script src="/boomz/js/jquery.fittext.js"></script>
    <script>
        $("#fittext1").fitText(1.3, {
            minFontSize: '44px',
            maxFontSize: '85px'
        });
    </script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-69726516-1', 'auto');
        ga('send', 'pageview');

    </script>
</body>
</html>
