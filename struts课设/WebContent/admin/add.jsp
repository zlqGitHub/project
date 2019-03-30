<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .div{
            width: 400px;
            height: 340px;
            background: #313541;
            margin: 50px 200px;
            text-align: center;
            padding-top: 30px;
        }
        .span1{
            color: #FFFFFF;
            font-size: 23px;
            display: block;
            margin-bottom: 20px;
        }
        input{
            display: block;
            width: 280px;
            height: 40px;
            margin: 5px auto;
            padding-left: 10px;
            border-radius: 5px;
            border: none;
            font-size: 18px;
        }
        .span2{
            color: #FFFFFF;
            float: left;
            font-size: 18px;
            display: block;
            margin-left: 58px;
            margin-top: -5px;
        }
        .select{
            width: 120px;
            height: 25px;
            font-size: 18px;
            border-radius: 2px;
            margin: -10px 0 10px -45px;
        }
        .intro{
            width: 280px;
            height: 80px;
            border-radius: 3px;
            line-height: 20px;
            font-size: 14px;
        }
        .submit{
            font-size:20px;
            letter-spacing:5px;
            cursor: pointer;
            margin-top: 20px;
        }
        .submit:hover {
            color:#FFFFFF;
            background-color: #3D598A;
        }

    </style>
</head>
<body>
    <div class="div">
        <span class="span1">添加课程</span>
        <form action="adden" method="post">
            <input type="text" name="td" placeholder="输入要添加的课程"><br>
            <span class="span2">添加课程开课状态:</span>
            <select name="state" class="select">
                <option>未开放</option>
                <option>已开放</option>
            </select><br>
            <textarea maxlength="80" class="intro" rows="3" cols="20" name="introduce" placeholder="课程简介"></textarea><br>
            <input class="submit" type="submit"  value="添加">
        </form>
    </div>

</body>
</html>