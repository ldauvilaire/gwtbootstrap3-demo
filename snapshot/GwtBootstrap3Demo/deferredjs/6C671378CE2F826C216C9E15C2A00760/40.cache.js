$wnd.GwtBootstrap3Demo.runAsyncCallback40("function $Sc(){}\nfunction cTc(){}\nfunction eTc(){}\nfunction fTc(){fTc=Hhb;bTc=new eTc}\nfunction fxc(a){dzb.call(this,a);exc(this)}\nfunction ZSc(){pKb.call(this);nKb(this,_Sc(new aTc))}\nfunction TSc(a,b,c){BJb();ZJb.call(this,a,b,c,(Bxc(),Axc))}\nfunction aTc(){this.a=(new cTc,fTc(),bTc);dTc(this.a)}\nfunction jYc(a){var b;if(!a.M){b=new ZSc(new $Sc);a.M=b}return a.M}\nfunction iYc(a){var b;if(!a.L){b=new TSc(aJb(EKb(a.a)),jYc(a),hYc(a));tJb((HKb(a.a),b),TKb(HKb(a.a)));a.L=b}return a.L}\nfunction dTc(a){if(!a.a){a.a=true;hx((tD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction _Sc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new e6b;w_b(a,(b=new S1b(rNd),w_b(b,(c=new K4b,c.a='Offline',J4b(c),c)),w_b(b,(d=new F0b,w_b(d,(e=new E2b((Iec(),Fec)),Llb((htb(),e.eb),'GPBYFDEFM',true),txc(e.b,yTd),x_b(e,e.b,0),e)),w_b(d,new nxc((j=new JQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Bjb(j.a)).a)),w_b(d,(f=new t2c,V5b(f,(k=new JQb,k.a+=zTd,new Bjb(k.a)).a),Llb(f.eb,wNd,true),f)),w_b(d,new nxc((l=new JQb,l.a+=ATd,new Bjb(l.a)).a)),w_b(d,(g=new t2c,V5b(g,(m=new JQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Bjb(m.a)).a),Llb(g.eb,wNd,true),g)),Llb(d.eb,'GPBYFDEEM',true),d)),w_b(b,(h=new X4b,w_b(h,(n=new k5b,w_b(n,(o=new E2b(Eec),txc(o.b,'What is Offline?'),x_b(o,o.b,0),o)),n)),w_b(h,(p=new Z4b,w_b(p,new fxc((q=new JQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Bjb(q.a)).a)),p)),w_b(h,new h5b),h)),w_b(b,(i=new X4b,w_b(i,(r=new k5b,w_b(r,(s=new E2b(Eec),txc(s.b,'How to configure?'),x_b(s,s.b,0),s)),r)),w_b(i,(t=new Z4b,w_b(t,new nxc((u=new JQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Bjb(u.a)).a)),w_b(t,(v=new t2c,V5b(v,(w=new JQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Bjb(w.a)).a),Llb(v.eb,wNd,true),v)),w_b(t,new nxc((A=new JQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Bjb(A.a)).a)),w_b(t,(B=new t2c,V5b(B,(C=new JQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Bjb(C.a)).a),Llb(B.eb,wNd,true),B)),w_b(t,new nxc((D=new JQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Bjb(D.a)).a)),w_b(t,(F=new t2c,V5b(F,(G=new JQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Bjb(G.a)).a),Llb(F.eb,wNd,true),F)),t)),w_b(i,new h5b),i)),b));return a}\nGhb(407,232,eKd,fxc);Ghb(1007,44,qKd,TSc);var b6=ZOb(hNd,'OfflinePresenter',1007);Ghb(1245,47,rKd,ZSc);var g6=ZOb(hNd,'OfflineView',1245);Ghb(1520,1,{},$Sc);var f6=ZOb(hNd,'OfflineView_BinderImpl',1520);Ghb(1521,1,{},aTc);var c6=ZOb(hNd,'OfflineView_BinderImpl/Widgets',1521);Ghb(1870,1,{},cTc);var bTc;var e6=ZOb(hNd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1870);Ghb(1871,1,{},eTc);_.a=false;var d6=ZOb(hNd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1871);Ghb(929,1,DMd);_.Sb=function KYc(){kMb(this.b,iYc(this.a.a))};MHd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
