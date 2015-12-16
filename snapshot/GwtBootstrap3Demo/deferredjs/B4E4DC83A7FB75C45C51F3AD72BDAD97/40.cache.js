$wnd.GwtBootstrap3Demo.runAsyncCallback40("function OKc(){}\nfunction SKc(){}\nfunction UKc(){}\nfunction VKc(){VKc=Lbb;RKc=new UKc}\nfunction sqc(a){ftb.call(this,a);rqc(this)}\nfunction NKc(){oEb.call(this);mEb(this,PKc(new QKc))}\nfunction HKc(a,b,c){ADb();YDb.call(this,a,b,c,(Nqc(),Mqc))}\nfunction QKc(){this.a=(new SKc,VKc(),RKc);TKc(this.a)}\nfunction UOc(a){var b;if(!a.M){b=new NKc(new OKc);a.M=b}return a.M}\nfunction TOc(a){var b;if(!a.L){b=new HKc(_Cb(DEb(a.a)),UOc(a),SOc(a));sDb((GEb(a.a),b),SEb(GEb(a.a)));a.L=b}return a.L}\nfunction TKc(a){if(!a.a){a.a=true;Wu((aB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction PKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new O_b;rVb(a,(b=new IXb(Fsd),rVb(b,(c=new A$b,c.a='Offline',z$b(c),c)),rVb(b,(d=new vWb,rVb(d,(e=new uYb((E8b(),B8b)),Ofb((mnb(),e.eb),'GPBYFDECM',true),Fqc(e.b,Gyd),sVb(e,e.b,0),e)),rVb(d,new zqc((j=new GKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Fdb(j.a)).a)),rVb(d,(f=new WUc,D_b(f,(k=new GKb,k.a+=Hyd,new Fdb(k.a)).a),Ofb(f.eb,Ksd,true),f)),rVb(d,new zqc((l=new GKb,l.a+=Iyd,new Fdb(l.a)).a)),rVb(d,(g=new WUc,D_b(g,(m=new GKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Fdb(m.a)).a),Ofb(g.eb,Ksd,true),g)),Ofb(d.eb,'GPBYFDEBM',true),d)),rVb(b,(h=new N$b,rVb(h,(n=new a_b,rVb(n,(o=new uYb(A8b),Fqc(o.b,'What is Offline?'),sVb(o,o.b,0),o)),n)),rVb(h,(p=new P$b,rVb(p,new sqc((q=new GKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Fdb(q.a)).a)),p)),rVb(h,new Z$b),h)),rVb(b,(i=new N$b,rVb(i,(r=new a_b,rVb(r,(s=new uYb(A8b),Fqc(s.b,'How to configure?'),sVb(s,s.b,0),s)),r)),rVb(i,(t=new P$b,rVb(t,new zqc((u=new GKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Fdb(u.a)).a)),rVb(t,(v=new WUc,D_b(v,(w=new GKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Fdb(w.a)).a),Ofb(v.eb,Ksd,true),v)),rVb(t,new zqc((A=new GKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Fdb(A.a)).a)),rVb(t,(B=new WUc,D_b(B,(C=new GKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Fdb(C.a)).a),Ofb(B.eb,Ksd,true),B)),rVb(t,new zqc((D=new GKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Fdb(D.a)).a)),rVb(t,(F=new WUc,D_b(F,(G=new GKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Fdb(G.a)).a),Ofb(F.eb,Ksd,true),F)),t)),rVb(i,new Z$b),i)),b));return a}\nKbb(398,226,Rqd,sqc);Kbb(918,48,zpd,HKc);var y2=XIb(ssd,'OfflinePresenter',918);Kbb(1156,51,Apd,NKc);var D2=XIb(ssd,'OfflineView',1156);Kbb(1391,1,{},OKc);var C2=XIb(ssd,'OfflineView_BinderImpl',1391);Kbb(1392,1,{},QKc);var z2=XIb(ssd,'OfflineView_BinderImpl/Widgets',1392);Kbb(1725,1,{},SKc);var RKc;var B2=XIb(ssd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1725);Kbb(1726,1,{},UKc);_.a=false;var A2=XIb(ssd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1726);Kbb(842,1,Prd);_.Sb=function qPc(){jGb(this.b,TOc(this.a.a))};end(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
