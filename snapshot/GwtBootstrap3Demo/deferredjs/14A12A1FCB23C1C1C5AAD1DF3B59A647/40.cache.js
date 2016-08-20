$wnd.GwtBootstrap3Demo.runAsyncCallback40("function BTc(){}\nfunction FTc(){}\nfunction HTc(){}\nfunction ITc(){ITc=Fib;ETc=new HTc}\nfunction Ixc(a){Pzb.call(this,a);Hxc(this)}\nfunction ATc(){RKb.call(this);PKb(this,CTc(new DTc))}\nfunction uTc(a,b,c){bKb();zKb.call(this,a,b,c,(_xc(),$xc))}\nfunction DTc(){this.a=(new FTc,ITc(),ETc);GTc(this.a)}\nfunction MYc(a){var b;if(!a.M){b=new ATc(new BTc);a.M=b}return a.M}\nfunction LYc(a){var b;if(!a.L){b=new uTc(CJb(eLb(a.a)),MYc(a),KYc(a));VJb((hLb(a.a),b),tLb(hLb(a.a)));a.L=b}return a.L}\nfunction GTc(a){if(!a.a){a.a=true;Wx((iE(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction CTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new F6b;X_b(a,(b=new s2b(eOd),X_b(b,(c=new j5b,c.a='Offline',i5b(c),c)),X_b(b,(d=new f1b,X_b(d,(e=new e3b((jfc(),gfc)),Kmb(e.eb,'GPBYFDEFM',true),Wxc(e.b,lUd),Y_b(e,e.b,0),e)),X_b(d,new Qxc((j=new jRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Dkb(j.a)).a)),X_b(d,(f=new W2c,u6b(f,(k=new jRb,k.a+=mUd,new Dkb(k.a)).a),Kmb(f.eb,jOd,true),f)),X_b(d,new Qxc((l=new jRb,l.a+=nUd,new Dkb(l.a)).a)),X_b(d,(g=new W2c,u6b(g,(m=new jRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Dkb(m.a)).a),Kmb(g.eb,jOd,true),g)),Kmb(d.eb,'GPBYFDEEM',true),d)),X_b(b,(h=new w5b,X_b(h,(n=new L5b,X_b(n,(o=new e3b(ffc),Wxc(o.b,'What is Offline?'),Y_b(o,o.b,0),o)),n)),X_b(h,(p=new y5b,X_b(p,new Ixc((q=new jRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Dkb(q.a)).a)),p)),X_b(h,new I5b),h)),X_b(b,(i=new w5b,X_b(i,(r=new L5b,X_b(r,(s=new e3b(ffc),Wxc(s.b,'How to configure?'),Y_b(s,s.b,0),s)),r)),X_b(i,(t=new y5b,X_b(t,new Qxc((u=new jRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Dkb(u.a)).a)),X_b(t,(v=new W2c,u6b(v,(w=new jRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Dkb(w.a)).a),Kmb(v.eb,jOd,true),v)),X_b(t,new Qxc((A=new jRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Dkb(A.a)).a)),X_b(t,(B=new W2c,u6b(B,(C=new jRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Dkb(C.a)).a),Kmb(B.eb,jOd,true),B)),X_b(t,new Qxc((D=new jRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Dkb(D.a)).a)),X_b(t,(F=new W2c,u6b(F,(G=new jRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Dkb(G.a)).a),Kmb(F.eb,jOd,true),F)),t)),X_b(i,new I5b),i)),b));return a}\nEib(409,233,SKd,Ixc);Eib(1011,44,cLd,uTc);var X6=zPb(WNd,'OfflinePresenter',1011);Eib(1250,47,dLd,ATc);var a7=zPb(WNd,'OfflineView',1250);Eib(1528,1,{},BTc);var _6=zPb(WNd,'OfflineView_BinderImpl',1528);Eib(1529,1,{},DTc);var Y6=zPb(WNd,'OfflineView_BinderImpl/Widgets',1529);Eib(1878,1,{},FTc);var ETc;var $6=zPb(WNd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1878);Eib(1879,1,{},HTc);_.a=false;var Z6=zPb(WNd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1879);Eib(933,1,qNd);_.Sb=function lZc(){MMb(this.b,LYc(this.a.a))};BId(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
