$wnd.GwtBootstrap3Demo.runAsyncCallback40("function qTc(){}\nfunction uTc(){}\nfunction wTc(){}\nfunction xTc(){xTc=Zhb;tTc=new wTc}\nfunction uxc(a){szb.call(this,a);txc(this)}\nfunction pTc(){BKb.call(this);zKb(this,rTc(new sTc))}\nfunction jTc(a,b,c){NJb();jKb.call(this,a,b,c,(Qxc(),Pxc))}\nfunction sTc(){this.a=(new uTc,xTc(),tTc);vTc(this.a)}\nfunction BYc(a){var b;if(!a.M){b=new pTc(new qTc);a.M=b}return a.M}\nfunction AYc(a){var b;if(!a.L){b=new jTc(mJb(QKb(a.a)),BYc(a),zYc(a));FJb((TKb(a.a),b),dLb(TKb(a.a)));a.L=b}return a.L}\nfunction vTc(a){if(!a.a){a.a=true;Nx((QD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction rTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new r6b;I_b(a,(b=new d2b(eOd),I_b(b,(c=new X4b,c.a='Offline',W4b(c),c)),I_b(b,(d=new S0b,I_b(d,(e=new R2b((Xec(),Uec)),bmb((xtb(),e.eb),'GPBYFDEFM',true),Ixc(e.b,kUd),J_b(e,e.b,0),e)),I_b(d,new Cxc((j=new VQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Tjb(j.a)).a)),I_b(d,(f=new L2c,g6b(f,(k=new VQb,k.a+=lUd,new Tjb(k.a)).a),bmb(f.eb,jOd,true),f)),I_b(d,new Cxc((l=new VQb,l.a+=mUd,new Tjb(l.a)).a)),I_b(d,(g=new L2c,g6b(g,(m=new VQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Tjb(m.a)).a),bmb(g.eb,jOd,true),g)),bmb(d.eb,'GPBYFDEEM',true),d)),I_b(b,(h=new i5b,I_b(h,(n=new x5b,I_b(n,(o=new R2b(Tec),Ixc(o.b,'What is Offline?'),J_b(o,o.b,0),o)),n)),I_b(h,(p=new k5b,I_b(p,new uxc((q=new VQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Tjb(q.a)).a)),p)),I_b(h,new u5b),h)),I_b(b,(i=new i5b,I_b(i,(r=new x5b,I_b(r,(s=new R2b(Tec),Ixc(s.b,'How to configure?'),J_b(s,s.b,0),s)),r)),I_b(i,(t=new k5b,I_b(t,new Cxc((u=new VQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Tjb(u.a)).a)),I_b(t,(v=new L2c,g6b(v,(w=new VQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Tjb(w.a)).a),bmb(v.eb,jOd,true),v)),I_b(t,new Cxc((A=new VQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Tjb(A.a)).a)),I_b(t,(B=new L2c,g6b(B,(C=new VQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Tjb(C.a)).a),bmb(B.eb,jOd,true),B)),I_b(t,new Cxc((D=new VQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Tjb(D.a)).a)),I_b(t,(F=new L2c,g6b(F,(G=new VQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Tjb(G.a)).a),bmb(F.eb,jOd,true),F)),t)),I_b(i,new u5b),i)),b));return a}\nYhb(408,233,RKd,uxc);Yhb(1012,44,cLd,jTc);var p6=jPb(WNd,'OfflinePresenter',1012);Yhb(1251,47,dLd,pTc);var u6=jPb(WNd,'OfflineView',1251);Yhb(1526,1,{},qTc);var t6=jPb(WNd,'OfflineView_BinderImpl',1526);Yhb(1527,1,{},sTc);var q6=jPb(WNd,'OfflineView_BinderImpl/Widgets',1527);Yhb(1875,1,{},uTc);var tTc;var s6=jPb(WNd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1875);Yhb(1876,1,{},wTc);_.a=false;var r6=jPb(WNd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1876);Yhb(934,1,qNd);_.Sb=function aZc(){wMb(this.b,AYc(this.a.a))};zId(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
