$wnd.GwtBootstrap3Demo.runAsyncCallback40("function fVc(){}\nfunction jVc(){}\nfunction lVc(){}\nfunction mVc(){mVc=Xib;iVc=new lVc}\nfunction mzc(a){uAb.call(this,a);lzc(this)}\nfunction eVc(){pLb.call(this);nLb(this,gVc(new hVc))}\nfunction $Uc(a,b,c){BKb();ZKb.call(this,a,b,c,(Fzc(),Ezc))}\nfunction hVc(){this.a=(new jVc,mVc(),iVc);kVc(this.a)}\nfunction t$c(a){var b;if(!a.M){b=new eVc(new fVc);a.M=b}return a.M}\nfunction s$c(a){var b;if(!a.L){b=new $Uc(aKb(ELb(a.a)),t$c(a),r$c(a));tKb((HLb(a.a),b),TLb(HLb(a.a)));a.L=b}return a.L}\nfunction kVc(a){if(!a.a){a.a=true;Kx((jE(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction gVc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new h7b;w0b(a,(b=new V2b(oQd),w0b(b,(c=new N5b,c.a='Offline',M5b(c),c)),w0b(b,(d=new I1b,w0b(d,(e=new H3b((Nfc(),Kfc)),_mb((Aub(),e.eb),'GPBYFDEFM',true),Azc(e.b,sWd),x0b(e,e.b,0),e)),w0b(d,new uzc((j=new JRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Rkb(j.a)).a)),w0b(d,(f=new D4c,Y6b(f,(k=new JRb,k.a+=tWd,new Rkb(k.a)).a),_mb(f.eb,tQd,true),f)),w0b(d,new uzc((l=new JRb,l.a+=uWd,new Rkb(l.a)).a)),w0b(d,(g=new D4c,Y6b(g,(m=new JRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Rkb(m.a)).a),_mb(g.eb,tQd,true),g)),_mb(d.eb,'GPBYFDEEM',true),d)),w0b(b,(h=new $5b,w0b(h,(n=new n6b,w0b(n,(o=new H3b(Jfc),Azc(o.b,'What is Offline?'),x0b(o,o.b,0),o)),n)),w0b(h,(p=new a6b,w0b(p,new mzc((q=new JRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Rkb(q.a)).a)),p)),w0b(h,new k6b),h)),w0b(b,(i=new $5b,w0b(i,(r=new n6b,w0b(r,(s=new H3b(Jfc),Azc(s.b,'How to configure?'),x0b(s,s.b,0),s)),r)),w0b(i,(t=new a6b,w0b(t,new uzc((u=new JRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Rkb(u.a)).a)),w0b(t,(v=new D4c,Y6b(v,(w=new JRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Rkb(w.a)).a),_mb(v.eb,tQd,true),v)),w0b(t,new uzc((A=new JRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Rkb(A.a)).a)),w0b(t,(B=new D4c,Y6b(B,(C=new JRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Rkb(C.a)).a),_mb(B.eb,tQd,true),B)),w0b(t,new uzc((D=new JRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Rkb(D.a)).a)),w0b(t,(F=new D4c,Y6b(F,(G=new JRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Rkb(G.a)).a),_mb(F.eb,tQd,true),F)),t)),w0b(i,new k6b),i)),b));return a}\nWib(410,233,bNd,mzc);Wib(1016,44,mNd,$Uc);var i7=ZPb(eQd,'OfflinePresenter',1016);Wib(1255,47,nNd,eVc);var n7=ZPb(eQd,'OfflineView',1255);Wib(1532,1,{},fVc);var m7=ZPb(eQd,'OfflineView_BinderImpl',1532);Wib(1533,1,{},hVc);var j7=ZPb(eQd,'OfflineView_BinderImpl/Widgets',1533);Wib(1883,1,{},jVc);var iVc;var l7=ZPb(eQd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1883);Wib(1884,1,{},lVc);_.a=false;var k7=ZPb(eQd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1884);Wib(938,1,APd);_.Sb=function U$c(){kNb(this.b,s$c(this.a.a))};KKd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
