$wnd.GwtBootstrap3Demo.runAsyncCallback40("function AUc(){}\nfunction EUc(){}\nfunction GUc(){}\nfunction HUc(){HUc=dib;DUc=new GUc}\nfunction Hyc(a){Gzb.call(this,a);Gyc(this)}\nfunction zUc(){JKb.call(this);HKb(this,BUc(new CUc))}\nfunction tUc(a,b,c){VJb();rKb.call(this,a,b,c,($yc(),Zyc))}\nfunction CUc(){this.a=(new EUc,HUc(),DUc);FUc(this.a)}\nfunction OZc(a){var b;if(!a.M){b=new zUc(new AUc);a.M=b}return a.M}\nfunction NZc(a){var b;if(!a.L){b=new tUc(uJb(YKb(a.a)),OZc(a),MZc(a));NJb((_Kb(a.a),b),lLb(_Kb(a.a)));a.L=b}return a.L}\nfunction FUc(a){if(!a.a){a.a=true;Kx((PD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction BUc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new C6b;Q_b(a,(b=new o2b(JPd),Q_b(b,(c=new g5b,c.a='Offline',f5b(c),c)),Q_b(b,(d=new b1b,Q_b(d,(e=new a3b((gfc(),dfc)),lmb((Ltb(),e.eb),'GPBYFDEFM',true),Vyc(e.b,NVd),R_b(e,e.b,0),e)),Q_b(d,new Pyc((j=new bRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new bkb(j.a)).a)),Q_b(d,(f=new Y3c,r6b(f,(k=new bRb,k.a+=OVd,new bkb(k.a)).a),lmb(f.eb,OPd,true),f)),Q_b(d,new Pyc((l=new bRb,l.a+=PVd,new bkb(l.a)).a)),Q_b(d,(g=new Y3c,r6b(g,(m=new bRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new bkb(m.a)).a),lmb(g.eb,OPd,true),g)),lmb(d.eb,'GPBYFDEEM',true),d)),Q_b(b,(h=new t5b,Q_b(h,(n=new I5b,Q_b(n,(o=new a3b(cfc),Vyc(o.b,'What is Offline?'),R_b(o,o.b,0),o)),n)),Q_b(h,(p=new v5b,Q_b(p,new Hyc((q=new bRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new bkb(q.a)).a)),p)),Q_b(h,new F5b),h)),Q_b(b,(i=new t5b,Q_b(i,(r=new I5b,Q_b(r,(s=new a3b(cfc),Vyc(s.b,'How to configure?'),R_b(s,s.b,0),s)),r)),Q_b(i,(t=new v5b,Q_b(t,new Pyc((u=new bRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new bkb(u.a)).a)),Q_b(t,(v=new Y3c,r6b(v,(w=new bRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new bkb(w.a)).a),lmb(v.eb,OPd,true),v)),Q_b(t,new Pyc((A=new bRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new bkb(A.a)).a)),Q_b(t,(B=new Y3c,r6b(B,(C=new bRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new bkb(C.a)).a),lmb(B.eb,OPd,true),B)),Q_b(t,new Pyc((D=new bRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new bkb(D.a)).a)),Q_b(t,(F=new Y3c,r6b(F,(G=new bRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new bkb(G.a)).a),lmb(F.eb,OPd,true),F)),t)),Q_b(i,new F5b),i)),b));return a}\ncib(410,233,vMd,Hyc);cib(1016,44,HMd,tUc);var q6=rPb(zPd,'OfflinePresenter',1016);cib(1255,47,IMd,zUc);var v6=rPb(zPd,'OfflineView',1255);cib(1532,1,{},AUc);var u6=rPb(zPd,'OfflineView_BinderImpl',1532);cib(1533,1,{},CUc);var r6=rPb(zPd,'OfflineView_BinderImpl/Widgets',1533);cib(1881,1,{},EUc);var DUc;var t6=rPb(zPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1881);cib(1882,1,{},GUc);_.a=false;var s6=rPb(zPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1882);cib(938,1,VOd);_.Sb=function n$c(){EMb(this.b,NZc(this.a.a))};dKd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
