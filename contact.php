!DOCTYPE html >
<html>
<head>
  <meta charset="utf-8" >
  <title>Thanks!</title>
  <style type="text/css">
  ol, ul { 
     list-style-type: none;
      }
  body {  
    background-color: #faf2e4;
    margin: 0 10%;
    font-family: "Verdana", sans-serif;
  }
  h1 {
    text-align: center;
    font-family: "Verdana", sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    border-bottom: 1px solid #57b1dc;
    margin-top: 30px;
  }

  h2 {
    color: #d1633c;
    font-size: 1em;
  }
  p.disclaimer { 
    border-top: 1px solid #d1633c; 
    padding-top: 1em;
  }
  </style>
</head>

<body>
  
<h1>THANK YOU</h1>

<p>Thank you for reaching out! You entered the following information:</p>

<h2>Your Information</h2>
<ul>
<li><strong>Name:</strong> <?php print $_POST['Name'] ? $_POST['Name'] : '<em>empty</em>'; ?></li>
<li><strong>Email Address:</strong> <?php print $_POST['Email'] ? $_POST['Email'] : '<em>empty</em>'; ?></li>
</ul>
<p><strong>Delivery instructions:</strong> <?php print $_POST['Comments'] ? $_POST['Comments'] : '<em>empty</em>'; ?></p>

</body>
</html>
