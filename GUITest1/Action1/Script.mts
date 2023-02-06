
'************************** Web Advantage REGISTER ************************************ @@ script infofile_;_ZIP::ssf3.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click 'Click Profile logo @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CREATE NEW ACCOUNT").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameRegisterPage").Set "indratest" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailRegisterPage").Set "indratest@gmail.com" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordRegisterPage").SetSecure "63e0ab6bcad6481a8043a14d11708ddb6fdf1c89c4c1b5c944d7eced773b" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("confirm_passwordRegisterPage").SetSecure "63e0ab71af5cbb333481c30273f2e69150e930a7aa01c63bf2cac826f071" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("first_nameRegisterPage").Set "indra" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("last_nameRegisterPage").Set "test" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("phone_numberRegisterPage").Set "0811112222" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebList("countryListboxRegisterPage").Select "Indonesia" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("cityRegisterPage").Set "Jakarta" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("addressRegisterPage").Set "Jl.Sawo II" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("state_/_province_/_regionRegis").Set "Jakarta" @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("postal_codeRegisterPage").Set "11430" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("i_agree").Set "ON" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("register_btnundefined").Click 'Click Register button @@ script infofile_;_ZIP::ssf29.xml_;_

'************************** LOGIN Steps ************************************ @@ hightlight id_;_263808_;_script infofile_;_ZIP::ssf30.xml_;_

Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Wait(5)
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("username").Set "indratest" @@ script infofile_;_ZIP::ssf32.xml_;_
Wait(5)
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("password").SetSecure "63e0b7a4756b0a3d27a501525e35cc27517dc0fd2f613db14f357a5566b4" @@ script infofile_;_ZIP::ssf33.xml_;_
Wait(5)
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click 'Click Sign In button @@ script infofile_;_ZIP::ssf34.xml_;_

'************************** BUY TABLET Steps ************************************

Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("TabletsCategoryTxt").Click 'Click Category item @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("HP ElitePad 1000 G2 Tablet").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("check_out_btn_2").Click
'Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("check_out_btn").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("next_btn").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("SafePay username").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("safepay_username").Set "indratest" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "63e0b9985a454b7b0669f3a2ec7c2fce75013ba8606624d60a843b4d0400" @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click @@ script infofile_;_ZIP::ssf43.xml_;_


 @@ script infofile_;_ZIP::ssf44.xml_;_
