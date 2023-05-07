<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web</title>
</head>
<body>
  <?php
    $result = file_get_contents('http://api-container:9001');
    $users = json_decode($result);
  ?>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($users as $user) : ?>
      <td>
        <tr><?php echo $user->name; ?></tr>
        <tr><?php echo $user->email; ?></tr>
      </td>      
      <?php endforeach; ?>
    </tbody>
  </table>
</body>
</html>