$wnd.GwtBootstrap3Demo.runAsyncCallback40("function qNc(){}\nfunction uNc(){}\nfunction wNc(){}\nfunction xNc(){xNc=Xdb;tNc=new wNc}\nfunction Fsc(a){svb.call(this,a);Esc(this)}\nfunction pNc(){EGb.call(this);CGb(this,rNc(new sNc))}\nfunction jNc(a,b,c){QFb();mGb.call(this,a,b,c,(_sc(),$sc))}\nfunction sNc(){this.a=(new uNc,xNc(),tNc);vNc(this.a)}\nfunction VRc(a){var b;if(!a.M){b=new pNc(new qNc);a.M=b}return a.M}\nfunction URc(a){var b;if(!a.L){b=new jNc(pFb(TGb(a.a)),VRc(a),TRc(a));IFb((WGb(a.a),b),gHb(WGb(a.a)));a.L=b}return a.L}\nfunction vNc(a){if(!a.a){a.a=true;fv((rB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction rNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new q2b;LXb(a,(b=new b$b(FBd),LXb(b,(c=new W0b,c.a='Offline',V0b(c),c)),LXb(b,(d=new QYb,LXb(d,(e=new P$b((Qac(),Nac)),$hb((wpb(),e.eb),'GPBYFDECM',true),Tsc(e.b,SHd),MXb(e,e.b,0),e)),LXb(d,new Nsc((j=new YMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Rfb(j.a)).a)),LXb(d,(f=new XXc,f2b(f,(k=new YMb,k.a+=THd,new Rfb(k.a)).a),$hb(f.eb,KBd,true),f)),LXb(d,new Nsc((l=new YMb,l.a+=UHd,new Rfb(l.a)).a)),LXb(d,(g=new XXc,f2b(g,(m=new YMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Rfb(m.a)).a),$hb(g.eb,KBd,true),g)),$hb(d.eb,'GPBYFDEBM',true),d)),LXb(b,(h=new h1b,LXb(h,(n=new w1b,LXb(n,(o=new P$b(Mac),Tsc(o.b,'What is Offline?'),MXb(o,o.b,0),o)),n)),LXb(h,(p=new j1b,LXb(p,new Fsc((q=new YMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Rfb(q.a)).a)),p)),LXb(h,new t1b),h)),LXb(b,(i=new h1b,LXb(i,(r=new w1b,LXb(r,(s=new P$b(Mac),Tsc(s.b,'How to configure?'),MXb(s,s.b,0),s)),r)),LXb(i,(t=new j1b,LXb(t,new Nsc((u=new YMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Rfb(u.a)).a)),LXb(t,(v=new XXc,f2b(v,(w=new YMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Rfb(w.a)).a),$hb(v.eb,KBd,true),v)),LXb(t,new Nsc((A=new YMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Rfb(A.a)).a)),LXb(t,(B=new XXc,f2b(B,(C=new YMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Rfb(C.a)).a),$hb(B.eb,KBd,true),B)),LXb(t,new Nsc((D=new YMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Rfb(D.a)).a)),LXb(t,(F=new XXc,f2b(F,(G=new YMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Rfb(G.a)).a),$hb(F.eb,KBd,true),F)),t)),LXb(i,new t1b),i)),b));return a}\nWdb(405,232,Uzd,Fsc);Wdb(971,49,Cyd,jNc);var z3=mLb(vBd,'OfflinePresenter',971);Wdb(1212,53,Dyd,pNc);var E3=mLb(vBd,'OfflineView',1212);Wdb(1449,1,{},qNc);var D3=mLb(vBd,'OfflineView_BinderImpl',1449);Wdb(1450,1,{},sNc);var A3=mLb(vBd,'OfflineView_BinderImpl/Widgets',1450);Wdb(1796,1,{},uNc);var tNc;var C3=mLb(vBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1796);Wdb(1797,1,{},wNc);_.a=false;var B3=mLb(vBd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1797);Wdb(895,1,TAd);_.Sb=function rSc(){zIb(this.b,URc(this.a.a))};_vd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
