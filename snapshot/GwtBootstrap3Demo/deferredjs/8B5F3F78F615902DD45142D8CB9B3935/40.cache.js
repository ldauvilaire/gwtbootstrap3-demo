$wnd.GwtBootstrap3Demo.runAsyncCallback40("function yTc(){}\nfunction CTc(){}\nfunction ETc(){}\nfunction FTc(){FTc=iib;BTc=new ETc}\nfunction Fxc(a){Dzb.call(this,a);Exc(this)}\nfunction xTc(){MKb.call(this);KKb(this,zTc(new ATc))}\nfunction rTc(a,b,c){YJb();uKb.call(this,a,b,c,(_xc(),$xc))}\nfunction ATc(){this.a=(new CTc,FTc(),BTc);DTc(this.a)}\nfunction JYc(a){var b;if(!a.M){b=new xTc(new yTc);a.M=b}return a.M}\nfunction IYc(a){var b;if(!a.L){b=new rTc(xJb(_Kb(a.a)),JYc(a),HYc(a));QJb((cLb(a.a),b),oLb(cLb(a.a)));a.L=b}return a.L}\nfunction DTc(a){if(!a.a){a.a=true;dx((ED(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction zTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new C6b;T_b(a,(b=new o2b(fOd),T_b(b,(c=new g5b,c.a='Offline',f5b(c),c)),T_b(b,(d=new b1b,T_b(d,(e=new a3b((gfc(),dfc)),mmb((Itb(),e.eb),'GPBYFDEFM',true),Txc(e.b,kUd),U_b(e,e.b,0),e)),T_b(d,new Nxc((j=new eRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ckb(j.a)).a)),T_b(d,(f=new T2c,r6b(f,(k=new eRb,k.a+=lUd,new ckb(k.a)).a),mmb(f.eb,kOd,true),f)),T_b(d,new Nxc((l=new eRb,l.a+=mUd,new ckb(l.a)).a)),T_b(d,(g=new T2c,r6b(g,(m=new eRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ckb(m.a)).a),mmb(g.eb,kOd,true),g)),mmb(d.eb,'GPBYFDEEM',true),d)),T_b(b,(h=new t5b,T_b(h,(n=new I5b,T_b(n,(o=new a3b(cfc),Txc(o.b,'What is Offline?'),U_b(o,o.b,0),o)),n)),T_b(h,(p=new v5b,T_b(p,new Fxc((q=new eRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ckb(q.a)).a)),p)),T_b(h,new F5b),h)),T_b(b,(i=new t5b,T_b(i,(r=new I5b,T_b(r,(s=new a3b(cfc),Txc(s.b,'How to configure?'),U_b(s,s.b,0),s)),r)),T_b(i,(t=new v5b,T_b(t,new Nxc((u=new eRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ckb(u.a)).a)),T_b(t,(v=new T2c,r6b(v,(w=new eRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ckb(w.a)).a),mmb(v.eb,kOd,true),v)),T_b(t,new Nxc((A=new eRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ckb(A.a)).a)),T_b(t,(B=new T2c,r6b(B,(C=new eRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ckb(C.a)).a),mmb(B.eb,kOd,true),B)),T_b(t,new Nxc((D=new eRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ckb(D.a)).a)),T_b(t,(F=new T2c,r6b(F,(G=new eRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ckb(G.a)).a),mmb(F.eb,kOd,true),F)),t)),T_b(i,new F5b),i)),b));return a}\nhib(407,232,SKd,Fxc);hib(1010,44,dLd,rTc);var B6=uPb(XNd,'OfflinePresenter',1010);hib(1248,47,eLd,xTc);var G6=uPb(XNd,'OfflineView',1248);hib(1523,1,{},yTc);var F6=uPb(XNd,'OfflineView_BinderImpl',1523);hib(1524,1,{},ATc);var C6=uPb(XNd,'OfflineView_BinderImpl/Widgets',1524);hib(1874,1,{},CTc);var BTc;var E6=uPb(XNd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1874);hib(1875,1,{},ETc);_.a=false;var D6=uPb(XNd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1875);hib(932,1,rNd);_.Sb=function iZc(){HMb(this.b,IYc(this.a.a))};zId(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
