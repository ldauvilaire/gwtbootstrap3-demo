$wnd.GwtBootstrap3Demo.runAsyncCallback40("function KTc(){}\nfunction OTc(){}\nfunction QTc(){}\nfunction RTc(){RTc=rib;NTc=new QTc}\nfunction Oxc(a){Mzb.call(this,a);Nxc(this)}\nfunction JTc(){VKb.call(this);TKb(this,LTc(new MTc))}\nfunction DTc(a,b,c){fKb();DKb.call(this,a,b,c,(iyc(),hyc))}\nfunction MTc(){this.a=(new OTc,RTc(),NTc);PTc(this.a)}\nfunction VYc(a){var b;if(!a.M){b=new JTc(new KTc);a.M=b}return a.M}\nfunction UYc(a){var b;if(!a.L){b=new DTc(GJb(iLb(a.a)),VYc(a),TYc(a));ZJb((lLb(a.a),b),xLb(lLb(a.a)));a.L=b}return a.L}\nfunction PTc(a){if(!a.a){a.a=true;Nx((ZD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction LTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new L6b;a0b(a,(b=new x2b(yOd),a0b(b,(c=new p5b,c.a='Offline',o5b(c),c)),a0b(b,(d=new k1b,a0b(d,(e=new j3b((pfc(),mfc)),vmb((Rtb(),e.eb),'GPBYFDEFM',true),ayc(e.b,FUd),b0b(e,e.b,0),e)),a0b(d,new Wxc((j=new nRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new lkb(j.a)).a)),a0b(d,(f=new d3c,A6b(f,(k=new nRb,k.a+=GUd,new lkb(k.a)).a),vmb(f.eb,DOd,true),f)),a0b(d,new Wxc((l=new nRb,l.a+=HUd,new lkb(l.a)).a)),a0b(d,(g=new d3c,A6b(g,(m=new nRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new lkb(m.a)).a),vmb(g.eb,DOd,true),g)),vmb(d.eb,'GPBYFDEEM',true),d)),a0b(b,(h=new C5b,a0b(h,(n=new R5b,a0b(n,(o=new j3b(lfc),ayc(o.b,'What is Offline?'),b0b(o,o.b,0),o)),n)),a0b(h,(p=new E5b,a0b(p,new Oxc((q=new nRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new lkb(q.a)).a)),p)),a0b(h,new O5b),h)),a0b(b,(i=new C5b,a0b(i,(r=new R5b,a0b(r,(s=new j3b(lfc),ayc(s.b,'How to configure?'),b0b(s,s.b,0),s)),r)),a0b(i,(t=new E5b,a0b(t,new Wxc((u=new nRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new lkb(u.a)).a)),a0b(t,(v=new d3c,A6b(v,(w=new nRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new lkb(w.a)).a),vmb(v.eb,DOd,true),v)),a0b(t,new Wxc((A=new nRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new lkb(A.a)).a)),a0b(t,(B=new d3c,A6b(B,(C=new nRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new lkb(C.a)).a),vmb(B.eb,DOd,true),B)),a0b(t,new Wxc((D=new nRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new lkb(D.a)).a)),a0b(t,(F=new d3c,A6b(F,(G=new nRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new lkb(G.a)).a),vmb(F.eb,DOd,true),F)),t)),a0b(i,new O5b),i)),b));return a}\nqib(408,233,jLd,Oxc);qib(1011,44,wLd,DTc);var J6=DPb(oOd,'OfflinePresenter',1011);qib(1250,47,xLd,JTc);var O6=DPb(oOd,'OfflineView',1250);qib(1525,1,{},KTc);var N6=DPb(oOd,'OfflineView_BinderImpl',1525);qib(1526,1,{},MTc);var K6=DPb(oOd,'OfflineView_BinderImpl/Widgets',1526);qib(1876,1,{},OTc);var NTc;var M6=DPb(oOd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1876);qib(1877,1,{},QTc);_.a=false;var L6=DPb(oOd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1877);qib(933,1,KNd);_.Sb=function uZc(){QMb(this.b,UYc(this.a.a))};TId(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
