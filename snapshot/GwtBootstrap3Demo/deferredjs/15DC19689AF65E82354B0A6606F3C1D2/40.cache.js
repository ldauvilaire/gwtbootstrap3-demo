$wnd.GwtBootstrap3Demo.runAsyncCallback40("function kTc(){}\nfunction oTc(){}\nfunction qTc(){}\nfunction rTc(){rTc=gib;nTc=new qTc}\nfunction rxc(a){Ezb.call(this,a);qxc(this)}\nfunction jTc(){zKb.call(this);xKb(this,lTc(new mTc))}\nfunction dTc(a,b,c){LJb();hKb.call(this,a,b,c,(Nxc(),Mxc))}\nfunction mTc(){this.a=(new oTc,rTc(),nTc);pTc(this.a)}\nfunction vYc(a){var b;if(!a.M){b=new jTc(new kTc);a.M=b}return a.M}\nfunction uYc(a){var b;if(!a.L){b=new dTc(kJb(OKb(a.a)),vYc(a),tYc(a));DJb((RKb(a.a),b),bLb(RKb(a.a)));a.L=b}return a.L}\nfunction pTc(a){if(!a.a){a.a=true;ax((BD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction lTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new o6b;G_b(a,(b=new a2b(SNd),G_b(b,(c=new U4b,c.a='Offline',T4b(c),c)),G_b(b,(d=new P0b,G_b(d,(e=new O2b((Uec(),Rec)),kmb((Ktb(),e.eb),'GPBYFDEFM',true),Fxc(e.b,WTd),H_b(e,e.b,0),e)),G_b(d,new zxc((j=new TQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new akb(j.a)).a)),G_b(d,(f=new F2c,d6b(f,(k=new TQb,k.a+=XTd,new akb(k.a)).a),kmb(f.eb,XNd,true),f)),G_b(d,new zxc((l=new TQb,l.a+=YTd,new akb(l.a)).a)),G_b(d,(g=new F2c,d6b(g,(m=new TQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new akb(m.a)).a),kmb(g.eb,XNd,true),g)),kmb(d.eb,'GPBYFDEEM',true),d)),G_b(b,(h=new f5b,G_b(h,(n=new u5b,G_b(n,(o=new O2b(Qec),Fxc(o.b,'What is Offline?'),H_b(o,o.b,0),o)),n)),G_b(h,(p=new h5b,G_b(p,new rxc((q=new TQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new akb(q.a)).a)),p)),G_b(h,new r5b),h)),G_b(b,(i=new f5b,G_b(i,(r=new u5b,G_b(r,(s=new O2b(Qec),Fxc(s.b,'How to configure?'),H_b(s,s.b,0),s)),r)),G_b(i,(t=new h5b,G_b(t,new zxc((u=new TQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new akb(u.a)).a)),G_b(t,(v=new F2c,d6b(v,(w=new TQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new akb(w.a)).a),kmb(v.eb,XNd,true),v)),G_b(t,new zxc((A=new TQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new akb(A.a)).a)),G_b(t,(B=new F2c,d6b(B,(C=new TQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new akb(C.a)).a),kmb(B.eb,XNd,true),B)),G_b(t,new zxc((D=new TQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new akb(D.a)).a)),G_b(t,(F=new F2c,d6b(F,(G=new TQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new akb(G.a)).a),kmb(F.eb,XNd,true),F)),t)),G_b(i,new r5b),i)),b));return a}\nfib(408,232,FKd,rxc);fib(1011,44,QKd,dTc);var z6=hPb(INd,'OfflinePresenter',1011);fib(1249,47,RKd,jTc);var E6=hPb(INd,'OfflineView',1249);fib(1526,1,{},kTc);var D6=hPb(INd,'OfflineView_BinderImpl',1526);fib(1527,1,{},mTc);var A6=hPb(INd,'OfflineView_BinderImpl/Widgets',1527);fib(1876,1,{},oTc);var nTc;var C6=hPb(INd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1876);fib(1877,1,{},qTc);_.a=false;var B6=hPb(INd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1877);fib(933,1,cNd);_.Sb=function WYc(){uMb(this.b,uYc(this.a.a))};lId(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
