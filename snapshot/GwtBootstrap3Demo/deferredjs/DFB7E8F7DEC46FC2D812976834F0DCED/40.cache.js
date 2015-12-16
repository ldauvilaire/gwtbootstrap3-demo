$wnd.GwtBootstrap3Demo.runAsyncCallback40("function bLc(){}\nfunction fLc(){}\nfunction hLc(){}\nfunction iLc(){iLc=Nbb;eLc=new hLc}\nfunction Hqc(a){ltb.call(this,a);Gqc(this)}\nfunction aLc(){CEb.call(this);AEb(this,cLc(new dLc))}\nfunction WKc(a,b,c){ODb();kEb.call(this,a,b,c,(arc(),_qc))}\nfunction dLc(){this.a=(new fLc,iLc(),eLc);gLc(this.a)}\nfunction hPc(a){var b;if(!a.M){b=new aLc(new bLc);a.M=b}return a.M}\nfunction gPc(a){var b;if(!a.L){b=new WKc(nDb(REb(a.a)),hPc(a),fPc(a));GDb((UEb(a.a),b),eFb(UEb(a.a)));a.L=b}return a.L}\nfunction gLc(a){if(!a.a){a.a=true;Wu((cB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction cLc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new b0b;FVb(a,(b=new XXb(Vsd),FVb(b,(c=new P$b,c.a='Offline',O$b(c),c)),FVb(b,(d=new KWb,FVb(d,(e=new JYb((T8b(),Q8b)),Ufb((snb(),e.eb),'GPBYFDECM',true),Uqc(e.b,Vyd),GVb(e,e.b,0),e)),FVb(d,new Oqc((j=new UKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Ldb(j.a)).a)),FVb(d,(f=new jVc,S_b(f,(k=new UKb,k.a+=Wyd,new Ldb(k.a)).a),Ufb(f.eb,$sd,true),f)),FVb(d,new Oqc((l=new UKb,l.a+=Xyd,new Ldb(l.a)).a)),FVb(d,(g=new jVc,S_b(g,(m=new UKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Ldb(m.a)).a),Ufb(g.eb,$sd,true),g)),Ufb(d.eb,'GPBYFDEBM',true),d)),FVb(b,(h=new a_b,FVb(h,(n=new p_b,FVb(n,(o=new JYb(P8b),Uqc(o.b,'What is Offline?'),GVb(o,o.b,0),o)),n)),FVb(h,(p=new c_b,FVb(p,new Hqc((q=new UKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Ldb(q.a)).a)),p)),FVb(h,new m_b),h)),FVb(b,(i=new a_b,FVb(i,(r=new p_b,FVb(r,(s=new JYb(P8b),Uqc(s.b,'How to configure?'),GVb(s,s.b,0),s)),r)),FVb(i,(t=new c_b,FVb(t,new Oqc((u=new UKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Ldb(u.a)).a)),FVb(t,(v=new jVc,S_b(v,(w=new UKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Ldb(w.a)).a),Ufb(v.eb,$sd,true),v)),FVb(t,new Oqc((A=new UKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Ldb(A.a)).a)),FVb(t,(B=new jVc,S_b(B,(C=new UKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Ldb(C.a)).a),Ufb(B.eb,$sd,true),B)),FVb(t,new Oqc((D=new UKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Ldb(D.a)).a)),FVb(t,(F=new jVc,S_b(F,(G=new UKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Ldb(G.a)).a),Ufb(F.eb,$sd,true),F)),t)),FVb(i,new m_b),i)),b));return a}\nMbb(398,226,frd,Hqc);Mbb(917,48,Ppd,WKc);var A2=jJb(Isd,'OfflinePresenter',917);Mbb(1155,51,Qpd,aLc);var F2=jJb(Isd,'OfflineView',1155);Mbb(1390,1,{},bLc);var E2=jJb(Isd,'OfflineView_BinderImpl',1390);Mbb(1391,1,{},dLc);var B2=jJb(Isd,'OfflineView_BinderImpl/Widgets',1391);Mbb(1723,1,{},fLc);var eLc;var D2=jJb(Isd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1723);Mbb(1724,1,{},hLc);_.a=false;var C2=jJb(Isd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1724);Mbb(841,1,dsd);_.Sb=function FPc(){xGb(this.b,gPc(this.a.a))};tnd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
