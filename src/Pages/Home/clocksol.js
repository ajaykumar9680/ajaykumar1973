const vector2=glMatrix.vec2;

window.init = (canvas) => {
  console.log("Hello World");
  // TODO
  console.log("Hii, This is Ajay Kumar Medikonda, This code shows clock");
  
};

function lines(ctx, center, length, angle) {
  ctx.beginPath();

  ctx.moveTo(center[0], center[1]);
  const lastPoint=vector2.fromValues(0, -1);
  vector2.rotate(lastPoint,lastPoint,vector2.create(),angle);
  vector2.scale(lastPoint,lastPoint,length);
  ctx.lineTo(center[0]+lastPoint[0],center[1] +lastPoint[1]);
  ctx.stroke();

  
};

window.loop = (dt, canvas) => {
  // TODO
  // console.log("ajay kumar");
  const ctx=canvas.getContext("2d");
  
  const center = vector2.fromValues(canvas.width/2, canvas.height/2);
  const radius=100;

  ctx.beginPath();
  ctx.arc(center[0],center[1],radius,0,2 * Math.PI);
  ctx.stroke();

  const timeNow=new Date();
  const hour=timeNow.getHours()%12;
  const minute=timeNow.getMinutes();
  const sec=timeNow.getSeconds();
  //hour
  const hourAngle=((hour)*Math.PI)/6;
  const hLength=50;
  lines(ctx,center,hLength,hourAngle);
  //minute
  const minuteAngle=((minute)*Math.PI)/30;
  const mLength=80;
  ctx.strokeStyle="red";
  lines(ctx,center,mLength,minuteAngle);
  //second
  const secondAngle=Math.PI*sec/ 30;
  const sLength=90;

  ctx.beginPath();

  ctx.moveTo(center[0],center[1]);
  const sVector = vector2.fromValues(0,-1);
  vector2.rotate(sVector,sVector,vector2.create(),secondAngle);
  vector2.scale(sVector,sVector,sLength);
  ctx.lineTo(center[0]+sVector[0],center[1]+sVector[1]);
  ctx.strokeStyle="green";

  ctx.font="14px Times New Roman";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  for (let i=1;i<= 12;i++) {
    const angle=(i-3) * (Math.PI/6);
    const x1=center[0]+Math.cos(angle)*(radius-20);
    const y1=center[1]+Math.sin(angle)*(radius-20);
    ctx.fillText(i.toString(), x1, y1);
  }

  ctx.stroke();
};
