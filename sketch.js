var face_X = []
var face_y = []
var face_size = []
var face_num =5
var song 
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var musicIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec();
var result


function preload(){
  song = loadSound("O Holy Night - DJ Williams.mp3");
  
}




function setup() {
  createCanvas (windowWidth, windowHeight);
  angleMode(DEGREES)


music_btn = createButton("播音樂")
music_btn.position(10,10)
music_btn.size(350, 100);
music_btn.style('background-color', 'green');
music_btn.style('font-size', '44px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)


mouse_btn = createButton("暫停")
mouse_btn.position(370,10)
mouse_btn.size(350, 100);
mouse_btn.style('background-color', 'green');
mouse_btn.style('font-size', '44px');
mouse_btn.style('color', 'white');
mouse_btn.mousePressed(mouse_btn_pressed)


Speech_btn = createButton("語音辨識(播音樂/暫停)")
Speech_btn.position(740,10)
Speech_btn.size(350, 100);
Speech_btn.style('background-color', 'green');
Speech_btn.style('font-size', '32px');
Speech_btn.style('color', 'white');
Speech_btn.mousePressed(Speech_btn_pressed)



function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  musicIsplay = false
  amp=new p5.Amplitude()  
  music_btn.style('background-color', '#f28482');
  mouse_btn.style('background-color', 'green');

}

function mouse_btn_pressed(){  
  song.pause()
  musicIsplay = true
  songIsplay = false
  music_btn.style('background-color', 'green');
  mouse_btn.style('background-color', '#f28482');
}
function Speech_btn_pressed(){ 
  music_btn.style('background-color', 'green');
  mouse_btn.style('background-color', 'green');
  Speech_btn.style('background-color', '#f28482');
  myRec.onResult = showResult;
  myRec.start();
}

function showResult()
  {
      if(myRec.resultValue==true) {
			
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      console.log(1)
      console.log(myRec.resultString)
      if(myRec.resultString==="播音樂")
      {
        music_btn_pressed()
        mouseIsplay = false
        songIsplay = true
      }
      if(myRec.resultString==="暫停")
      {
        song.pause()
        mouseIsplay = true
        songIsplay = false
        }
		}
	}

  for (var i=0;i<face_num;i++){
    face_size[i] = random(100,400)//臉的大小190~400
    face_X[i] = random(0,width)
    face_y[i] = random(0,height)
    }
    }
    
function draw() {
  background(255,227,132);
  textSize(40)
  text("X:"+mouseX+"Y:"+mouseY,50,50)

  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
  }
  else
  if(mouseIsplay)
  {
    m_x = mouseX
    m_y= mouseY
  
  }
  for(var j=0;j<face_num;j++){
push()
var f_s =face_size[j]
  translate(face_X[j],face_y[j])
  fill(mouseX%256,mouseY%256,100)
  ellipse(0,0,f_s) //大園
  
  fill("#ff9b85")
  ellipse(f_s/4.70,-f_s/2.5,f_s/10,f_s/40) //腮紅
  ellipse(-f_s/4.70,-f_s/2.5,f_s/10,f_s/40) //腮紅

  fill("#e9f5db")
  ellipse(0+m_x/10,f_s/5.33+m_y/10,f_s/1.6) //小圓
  
  fill(mouseX%256,mouseY%256,100)
  ellipse(-f_s/5.33,-f_s/2,f_s/6.66) //眼睛
  ellipse(f_s/5.33,-f_s/2,f_s/6.66)  //眼睛

  fill("#31572c")
  ellipse(-f_s/2.66,-f_s/6.66,f_s/40)
  ellipse(-f_s/3.47,-f_s/5,f_s/40)
  ellipse(-f_s/2.75,-f_s/4.44,f_s/26.66)

  ellipse(f_s/2.66,-f_s/6.66,f_s/40)
  ellipse(f_s/3.47,-f_s/5,f_s/40)
  ellipse(f_s/2.75,-f_s/4.44,f_s/26.66)

  fill("#ffffff")
  ellipse(-f_s/5.33+map(mouseX,0,width,-f_s/20,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/20,f_s/20),f_s/13.33) //左眼珠
  ellipse(f_s/5.33+map(mouseX,0,width,-f_s/20,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/20,f_s/20),f_s/13.33) //右眼珠

  fill(0)
  ellipse(-f_s/5.33+map(mouseX,0,width,-f_s/20,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/20,f_s/20),f_s/20) //左眼珠
  ellipse(f_s/5.33+map(mouseX,0,width,-f_s/20,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/20,f_s/20),f_s/20) //右眼珠

  if(mouseIsPressed)
  {
    fill(255,0,0)
    arc(0,-f_s/2.66,f_s/2,f_s/2,0,180)
  }
  else
  {
    fill(255,0,0)
    arc(0,-f_s/2.66,f_s/2,f_s/3.2,0,180)
  }
  fill(mouseX%256,mouseY%256,100)
  arc(0,-f_s/2.64,f_s/2,f_s/4,0,180) //嘴巴

  noFill()
pop()
}
}