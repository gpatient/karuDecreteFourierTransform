
/**
 * @module karuDecreteFourierTransform
 * @name karuDecreteFourierTransform
 * @license gpatient
 * @author gpatient
 * @version 0.0.008
 */
 
 
 export default karuDecreteFourierTransform;
 import speech from 'gpatient/base64test';
  import dbg from 'debug';

var speecha = speech();   
var qqq=speecha.qwer();
dbg('karuDecreteFourierTransformaa ')(qqq.rrrr);


function karuDecreteFourierTransform(){
  if (!(this instanceof karuDecreteFourierTransform)) 
  return new karuDecreteFourierTransform();
}
karuDecreteFourierTransform.prototype.asdf=function(){
this.ver='asdf pp';
var tau=3.141592*2;
var kdft={
  tableMain:0,
  tables:0,
  tableLen:100,
  resultTables:0,
  
  mainCode:function(){
   this.initTables=function (tlen)
   {

	   this.resultTables=new Array(1);
	   this.resultTables[0]=new Array(1);
	   this.resultTables[1]=new Array(1);

		this.tableMain= new Array(new Float32Array(tlen),new Float32Array(tlen));
	   this.tables=new Array(2);
	   
	   var i=0,j=0;
	   this.tables[0]=new Array(tlen);
	   this.tables[1]=new Array(tlen);
	   //this.resultTables[0]=new Array(tlen*10);
	   //this.resultTables[1]=new Array(tlen*10);
	   
	   for(i=0;i<tlen;i++){
		this.tables[0][i]=new Float32Array(tlen);
		this.tables[1][i]=new Float32Array(tlen);

		}
	   for(i=0;i<tlen;i++){
		this.tableMain[0][i]=Math.sin(i*tau/tlen);
		this.tableMain[1][i]=Math.cos(i*tau/tlen);
	   }
	   for(j=0;j<tlen;j++){
		var pos=0;
		for(i=0;i<tlen;i++){
		 this.tables[0][j][i]=this.tableMain[0][pos];
		 this.tables[0][j][i]=this.tableMain[0][pos];
		 pos+=(j+1);
		}
	   }
    };
	this.dft=function (buf)
	{
		var i,j,sumA,sumB,k;
		var blen=buf.length;
		var pp=0,pos=0;
		var tableLen=this.tableLen;
		while(pos+tableLen<blen){
		for(k=0;k<2;k++)
		this.resultTables[k][pp]=new Float32Array(tableLen);
		
		for(i=0;i<tableLen;i++){
			sumA=0;
			sumB=0;
			for(j=0;j<tableLen;j++){
				sumA+=buf[j+pos]*this.tables[0][i][j];
				sumB+=buf[j+pos]*this.tables[1][i][j];
			}
			this.resultTables[0][pp][i]=sumA/tableLen;
			this.resultTables[1][pp][i]=sumB/tableLen;
			
		}
		pp++;
		pos+=tableLen;
		}
		return true;
	};
	this.ift=function ()
	{
		var i,j,sumA,sumB;
		var blen;
		var pp=0,pos=0;
		var tableLen=this.tableLen;
		blen=tableLen*this.resultTables[0].length;
		var abuf=new Float32Array(blen);
		while(pos+tableLen<blen){
		for(i=0;i<tableLen;i++){

			for(j=0;j<tableLen;j++){
				abuf[j+pos]+=this.resultTables[0][pp][i]*this.tables[0][i][j];
				abuf[j+pos]+=this.resultTables[1][pp][i]*this.tables[1][i][j];
				
			}
			
		}
		pp++;
		pos+=tableLen;
		}
		return abuf;
	};
  
	function sampleEnd(){}
	return this;
  },
endObject:0

};
var kdftCode=kdft.mainCode();
kdftCode.initTables(100);
//kdftCode.dft(qqq.ttwbuf);
var testBuf=kdftCode.ift();

this.dsp=function(t){
  var out=0;
  out=qqq.dsp(t);
  //return t%0.01*100; 
  //out=Math.sin(t*300*6);
  return out;
};
return this;

};

