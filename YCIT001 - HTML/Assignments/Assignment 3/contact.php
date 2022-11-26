<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>McGill Yoga Studio</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="mystyle.css">
</head>
  
<body>
    <div id = "wrapper">
        <header>
            <h1>McGill Yoga Studio</h1> 
         </header>
    <nav>
        <img
            class = "nav-logo"
            src = "./pngegg.png" 
            width="200" 
            height="200"
        />
        <ul
            style ="
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            "
        >
        <div id="navMenu">
                <li>
                    <a style="text-decoration: none" href="index.html">Home</a>
                </li>
            </div>
            <div id = "navMenu">
                <li>
                    <a style="text-decoration: none" href="classes.html">Classes</a>
                </li>
            </div>
            <div id = "navMenu">
                <li>
                    <a style="text-decoration: none" href="schedule.html">Schedule</a>
                </li>
            </div>
            <div id = "navMenu">
                <li>
                    <a style="text-decoration: none" href="contact.php">Contact</a>
                </li>
            </div>
        </ul>
    </nav> 
<div id = "text">
    <h2>Contact</h2>
    <br>
</div>
<form method="POST" id="form">
<?php 
echo $_POST['last-name'];
echo $_POST['first-name'];
echo $_POST['pass'];
?>
    <h3>Contact McGill Yoga Studio</h3>
    <p>Fill out the form below to contact Path of Light Studio. All information is required.</p>
   <div id = "fillForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br>
    <br>
    <label for="emai">E-mail:</label>
    <input type="email" id="email" placeholder="E-mail" name="email"><br>
    <br>
    <label for="howdidyouhearaboutus">How did you hear about us?</label>
    <input list="datalist" id="howdidyouhearaboutus" name="howdidyouhearaboutus">
    <datalist id="datalist">
    <option value="Google">
    <option value="Bing">
    <option value="Facebook">
    <option value="Friend">
    </datalist>
    <br>
    <br>
    <label for="emai">Comments:</label>
    <input type="textarea" id="comments" name="comments">
    <br>
    <br>
    <input type="submit" value="Send Now">
</div>
</form>
  <br>
</div>

<div id = "footer">
    <em><small>Copyright © 2021 McGill Yoga Studio</small></em>
    <br>Email us<a style="text-decoration: none" href="mailto:yoga@mcgillyoga.com?subject=Inquiries">yoga@mcgillyoga.com</a>  
</div>
</body>

</html>