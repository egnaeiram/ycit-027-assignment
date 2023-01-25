<?php
$message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

        $username = $_POST['name'];
        $userEmail = $_POST['email'];
        $messageSubject = $_POST['subject'];
        $message = $_POST['message'];
    
        $to = "blah@blah.com";
        $body ="";
    
        $body .= "From:" .$userName. "\r\n";
        $body .= "Email:" .$userEmail. "\r\n";
        $body .= "Message:" .$message. "\r\n";  

        //mail($to,$messageSubject,$body);

        $message_sent = true;
        }
        else {
            $invalid_class_name = "form-invalid";
        }
    }
?>

<html lang="en">
 <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> 
    <link rel="contact.html" href="MA.css" media="all">
</head>

<body>
    <?php 
    if($message_sent):
    ?>
        <h3>Thank you. We'll be in touch.</h3>
    <?php
    else:
    ?>
   
    <div class="container">
        <form action="webform.php" method="POST" class="form">
            <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Name" tabindex="1" required>
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control <?= $invalid_class_name ?? ""?>" id="email" name="email" placeholder="your@email.com" tabindex="2" required>
            </div>
            <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3" required>
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" rows="5" cols="50" id="message" name="message" placeholder="Message here" tabindex="4"></textarea>
            </div>
            <div>
                <button type="submit" class="btn">Send</button>
            </div>
            </form>
            </div>
            </form>
            </div>
<div id = "lekichains">
<blockquote><blockquote><blockquote><blockquote><a target="_blank" href="https://www.instagram.com/leki.chains/">LEKI CHAINS</a></blockquote></blockquote></blockquote></blockquote>
</div>
<div id = "soundcloud">
        <blockquote><blockquote><a target="_blank" href="https://soundcloud.com/deuterium_bbdj">SOUNDCLOUD</a></blockquote></blockquote>
</div>
<div id = "instagram">
        <blockquote><blockquote><blockquote><blockquote><blockquote><a target="_blank" href="https://www.instagram.com/industrialthrottling">INSTAGRAM</a></blockquote></blockquote></blockquote></blockquote></blockquote>
    </div>
     
    <br>
    <br>
    <br>  
    <br>
    <br>
    <br>
<div id = "menucontact">
    <a href="main.html">Main</a>&nbsp;<br>
    <a href="present.html">Present</a>&nbsp;<br>
    <a href="future.html">Future</a>&nbsp;<br>
    <a href="contact.html"></a>&nbsp;  
</div>
<footer><img class="footer" src="footer.png" alt="footer" width="100%"></a></footer>
</body>
</html>
