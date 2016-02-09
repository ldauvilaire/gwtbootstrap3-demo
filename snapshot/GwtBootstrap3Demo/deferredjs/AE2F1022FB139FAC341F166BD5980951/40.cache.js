$wnd.GwtBootstrap3Demo.runAsyncCallback40("function RMc(){}\nfunction VMc(){}\nfunction XMc(){}\nfunction YMc(){YMc=zdb;UMc=new XMc}\nfunction esc(a){Tub.call(this,a);dsc(this)}\nfunction QMc(){cGb.call(this);aGb(this,SMc(new TMc))}\nfunction KMc(a,b,c){oFb();MFb.call(this,a,b,c,(Asc(),zsc))}\nfunction TMc(){this.a=(new VMc,YMc(),UMc);WMc(this.a)}\nfunction uRc(a){var b;if(!a.M){b=new QMc(new RMc);a.M=b}return a.M}\nfunction tRc(a){var b;if(!a.L){b=new KMc(PEb(rGb(a.a)),uRc(a),sRc(a));gFb((uGb(a.a),b),GGb(uGb(a.a)));a.L=b}return a.L}\nfunction WMc(a){if(!a.a){a.a=true;bv((eB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction SMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new R1b;jXb(a,(b=new CZb(eBd),jXb(b,(c=new v0b,c.a='Offline',u0b(c),c)),jXb(b,(d=new pYb,jXb(d,(e=new o$b((pac(),mac)),Chb((Yob(),e.eb),'GPBYFDECM',true),ssc(e.b,qHd),kXb(e,e.b,0),e)),jXb(d,new msc((j=new wMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new tfb(j.a)).a)),jXb(d,(f=new wXc,G1b(f,(k=new wMb,k.a+=rHd,new tfb(k.a)).a),Chb(f.eb,jBd,true),f)),jXb(d,new msc((l=new wMb,l.a+=sHd,new tfb(l.a)).a)),jXb(d,(g=new wXc,G1b(g,(m=new wMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new tfb(m.a)).a),Chb(g.eb,jBd,true),g)),Chb(d.eb,'GPBYFDEBM',true),d)),jXb(b,(h=new I0b,jXb(h,(n=new X0b,jXb(n,(o=new o$b(lac),ssc(o.b,'What is Offline?'),kXb(o,o.b,0),o)),n)),jXb(h,(p=new K0b,jXb(p,new esc((q=new wMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new tfb(q.a)).a)),p)),jXb(h,new U0b),h)),jXb(b,(i=new I0b,jXb(i,(r=new X0b,jXb(r,(s=new o$b(lac),ssc(s.b,'How to configure?'),kXb(s,s.b,0),s)),r)),jXb(i,(t=new K0b,jXb(t,new msc((u=new wMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new tfb(u.a)).a)),jXb(t,(v=new wXc,G1b(v,(w=new wMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new tfb(w.a)).a),Chb(v.eb,jBd,true),v)),jXb(t,new msc((A=new wMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new tfb(A.a)).a)),jXb(t,(B=new wXc,G1b(B,(C=new wMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new tfb(C.a)).a),Chb(B.eb,jBd,true),B)),jXb(t,new msc((D=new wMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new tfb(D.a)).a)),jXb(t,(F=new wXc,G1b(F,(G=new wMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new tfb(G.a)).a),Chb(F.eb,jBd,true),F)),t)),jXb(i,new U0b),i)),b));return a}\nydb(405,232,tzd,esc);ydb(972,49,ayd,KMc);var b3=MKb(WAd,'OfflinePresenter',972);ydb(1213,53,byd,QMc);var g3=MKb(WAd,'OfflineView',1213);ydb(1450,1,{},RMc);var f3=MKb(WAd,'OfflineView_BinderImpl',1450);ydb(1451,1,{},TMc);var c3=MKb(WAd,'OfflineView_BinderImpl/Widgets',1451);ydb(1795,1,{},VMc);var UMc;var e3=MKb(WAd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1795);ydb(1796,1,{},XMc);_.a=false;var d3=MKb(WAd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1796);ydb(896,1,sAd);_.Sb=function SRc(){ZHb(this.b,tRc(this.a.a))};Avd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
