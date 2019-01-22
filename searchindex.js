Search.setIndex({docnames:["about","api","api/scanner","api/scannerpy","api/scannerpy.stdlib","api/stdlib","docker","from_source","getting-started","guide","handbook/concepts","handbook/concepts/database","handbook/concepts/graphs","handbook/custom-ops","handbook/custom-sink","handbook/custom-source","handbook/distributed","handbook/kubernetes","handbook/walkthrough","index","installation","overview","quickstart","tutorial","walkthrough"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["about.rst","api.rst","api/scanner.rst","api/scannerpy.rst","api/scannerpy.stdlib.rst","api/stdlib.rst","docker.rst","from_source.rst","getting-started.rst","guide.rst","handbook/concepts.rst","handbook/concepts/database.rst","handbook/concepts/graphs.rst","handbook/custom-ops.rst","handbook/custom-sink.rst","handbook/custom-source.rst","handbook/distributed.rst","handbook/kubernetes.rst","handbook/walkthrough.rst","index.rst","installation.rst","overview.rst","quickstart.rst","tutorial.rst","walkthrough.rst"],objects:{"":{scannerpy:[3,0,0,"-"]},"scannerpy.column":{Column:[3,1,1,""]},"scannerpy.column.Column":{id:[3,2,1,""],keyframes:[3,2,1,""],load:[3,2,1,""],name:[3,2,1,""],save_mp4:[3,2,1,""],type:[3,2,1,""]},"scannerpy.common":{ColumnType:[3,1,1,""],DeviceHandle:[3,1,1,""],DeviceType:[3,1,1,""],FrameType:[3,1,1,""],ScannerException:[3,4,1,""]},"scannerpy.common.ColumnType":{Blob:[3,3,1,""],Video:[3,3,1,""],to_proto:[3,3,1,""]},"scannerpy.common.DeviceType":{CPU:[3,3,1,""],GPU:[3,3,1,""],to_proto:[3,3,1,""]},"scannerpy.config":{Config:[3,1,1,""],mkdir_p:[3,6,1,""],read_line:[3,6,1,""]},"scannerpy.config.Config":{default_config:[3,5,1,""],default_config_path:[3,5,1,""]},"scannerpy.database":{Database:[3,1,1,""],start_master:[3,6,1,""],start_worker:[3,6,1,""]},"scannerpy.database.Database":{batch_load:[3,2,1,""],bulk_fetch_video_metadata:[3,2,1,""],delete_table:[3,2,1,""],delete_tables:[3,2,1,""],get_active_jobs:[3,2,1,""],has_gpu:[3,2,1,""],has_table:[3,2,1,""],ingest_videos:[3,2,1,""],load_op:[3,2,1,""],new_table:[3,2,1,""],profiler:[3,2,1,""],register_op:[3,2,1,""],register_python_kernel:[3,2,1,""],run:[3,2,1,""],start_master:[3,2,1,""],start_workers:[3,2,1,""],stop_cluster:[3,2,1,""],summarize:[3,2,1,""],table:[3,2,1,""],wait_on_job:[3,2,1,""],wait_on_job_gen:[3,2,1,""]},"scannerpy.job":{Job:[3,1,1,""]},"scannerpy.job.Job":{op_args:[3,2,1,""]},"scannerpy.kernel":{Kernel:[3,1,1,""],KernelConfig:[3,1,1,""],python_kernel_fn:[3,6,1,""]},"scannerpy.kernel.Kernel":{close:[3,2,1,""],execute:[3,2,1,""],new_stream:[3,2,1,""],reset:[3,2,1,""]},"scannerpy.op":{Op:[3,1,1,""],OpColumn:[3,1,1,""],OpGenerator:[3,1,1,""],register_python_op:[3,6,1,""]},"scannerpy.op.Op":{inputs:[3,2,1,""],outputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.op.OpColumn":{compress:[3,2,1,""],compress_default:[3,2,1,""],compress_video:[3,2,1,""],lossless:[3,2,1,""]},"scannerpy.partitioner":{TaskPartitioner:[3,1,1,""]},"scannerpy.partitioner.TaskPartitioner":{all:[3,2,1,""],gather:[3,2,1,""],range:[3,2,1,""],ranges:[3,2,1,""],strided:[3,2,1,""],strided_range:[3,2,1,""],strided_ranges:[3,2,1,""]},"scannerpy.profiler":{Profiler:[3,1,1,""],read_advance:[3,6,1,""],unpack_string:[3,6,1,""]},"scannerpy.profiler.Profiler":{statistics:[3,2,1,""],total_time_interval:[3,2,1,""],write_trace:[3,2,1,""]},"scannerpy.protobuf_generator":{ProtobufGenerator:[3,1,1,""],python_to_proto:[3,6,1,""]},"scannerpy.protobuf_generator.ProtobufGenerator":{add_module:[3,2,1,""]},"scannerpy.sampler":{Sampler:[3,1,1,""]},"scannerpy.sampler.Sampler":{All:[3,2,1,""],Gather:[3,2,1,""],Range:[3,2,1,""],Ranges:[3,2,1,""],Repeat:[3,2,1,""],RepeatNull:[3,2,1,""],Stride:[3,2,1,""],StridedRange:[3,2,1,""],StridedRanges:[3,2,1,""]},"scannerpy.sink":{Sink:[3,1,1,""],SinkGenerator:[3,1,1,""]},"scannerpy.sink.Sink":{inputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.source":{Source:[3,1,1,""],SourceGenerator:[3,1,1,""]},"scannerpy.source.Source":{outputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.stdlib":{bboxes:[4,0,0,"-"],build_flags:[4,0,0,"-"],montage:[4,0,0,"-"],net_descriptor:[4,0,0,"-"],pipelines:[4,0,0,"-"],pose_nms_kernel:[4,0,0,"-"],poses:[4,0,0,"-"],readers:[4,0,0,"-"],util:[4,0,0,"-"],video:[4,0,0,"-"],writers:[4,0,0,"-"]},"scannerpy.stdlib.bboxes":{iou:[4,6,1,""],nms:[4,6,1,""],proto_to_np:[4,6,1,""]},"scannerpy.stdlib.build_flags":{get_cmake:[4,6,1,""],get_compile_flags:[4,6,1,""],get_include:[4,6,1,""],get_lib:[4,6,1,""],get_link_flags:[4,6,1,""],print_cmake:[4,6,1,""],print_compile_flags:[4,6,1,""],print_include:[4,6,1,""],print_lib:[4,6,1,""],print_link_flags:[4,6,1,""]},"scannerpy.stdlib.montage":{make_montage:[4,6,1,""]},"scannerpy.stdlib.net_descriptor":{NetDescriptor:[4,1,1,""]},"scannerpy.stdlib.net_descriptor.NetDescriptor":{as_proto:[4,2,1,""],from_file:[4,7,1,""],input_height:[4,3,1,""],input_layer_names:[4,3,1,""],input_width:[4,3,1,""],mean_colors:[4,3,1,""],model_path:[4,3,1,""],model_weights_path:[4,3,1,""],normalize:[4,3,1,""],output_layer_names:[4,3,1,""],pad_mod:[4,3,1,""],preserve_aspect_ratio:[4,3,1,""],transpose:[4,3,1,""],uses_python:[4,3,1,""]},"scannerpy.stdlib.pipelines":{BBoxNMS:[4,1,1,""],detect_faces:[4,6,1,""],detect_poses:[4,6,1,""],ingest_images:[4,6,1,""]},"scannerpy.stdlib.pipelines.BBoxNMS":{close:[4,2,1,""],execute:[4,2,1,""]},"scannerpy.stdlib.pose_nms_kernel":{PoseNMSKernel:[4,1,1,""]},"scannerpy.stdlib.pose_nms_kernel.PoseNMSKernel":{close:[4,2,1,""],execute:[4,2,1,""]},"scannerpy.stdlib.poses":{Pose:[4,1,1,""],nms:[4,6,1,""]},"scannerpy.stdlib.poses.Pose":{Background:[4,3,1,""],DRAW_COLORS:[4,3,1,""],DRAW_PAIRS:[4,3,1,""],FACE_KEYPOINTS:[4,3,1,""],HAND_KEYPOINTS:[4,3,1,""],LAnkle:[4,3,1,""],LEar:[4,3,1,""],LElbow:[4,3,1,""],LEye:[4,3,1,""],LHip:[4,3,1,""],LKnee:[4,3,1,""],LShoulder:[4,3,1,""],LWrist:[4,3,1,""],Neck:[4,3,1,""],Nose:[4,3,1,""],POSE_KEYPOINTS:[4,3,1,""],POSE_SCORES:[4,3,1,""],RAnkle:[4,3,1,""],REar:[4,3,1,""],RElbow:[4,3,1,""],REye:[4,3,1,""],RHip:[4,3,1,""],RKnee:[4,3,1,""],RShoulder:[4,3,1,""],RWrist:[4,3,1,""],body_bbox:[4,2,1,""],distance_to:[4,2,1,""],draw:[4,2,1,""],face_bbox:[4,2,1,""],face_keypoints:[4,2,1,""],from_buffer:[4,5,1,""],hand_keypoints:[4,2,1,""],pose_keypoints:[4,2,1,""]},"scannerpy.stdlib.readers":{array:[4,6,1,""],bboxes:[4,6,1,""],flow:[4,6,1,""],frame_info:[4,6,1,""],histograms:[4,6,1,""],image:[4,6,1,""],poses:[4,6,1,""],raw_frame_gen:[4,6,1,""]},"scannerpy.stdlib.util":{"default":[4,6,1,""],download_temp_file:[4,6,1,""],temp_directory:[4,6,1,""]},"scannerpy.stdlib.video":{write_video:[4,6,1,""]},"scannerpy.stdlib.writers":{bboxes:[4,6,1,""],poses:[4,6,1,""]},"scannerpy.streams":{StreamsGenerator:[3,1,1,""]},"scannerpy.streams.StreamsGenerator":{All:[3,2,1,""],Gather:[3,2,1,""],Range:[3,2,1,""],Ranges:[3,2,1,""],Repeat:[3,2,1,""],RepeatNull:[3,2,1,""],Slice:[3,2,1,""],Stride:[3,2,1,""],StridedRange:[3,2,1,""],StridedRanges:[3,2,1,""],Unslice:[3,2,1,""]},"scannerpy.table":{Table:[3,1,1,""]},"scannerpy.table.Table":{column:[3,2,1,""],column_names:[3,2,1,""],committed:[3,2,1,""],id:[3,2,1,""],load:[3,2,1,""],name:[3,2,1,""],num_rows:[3,2,1,""],parent_rows:[3,2,1,""],profiler:[3,2,1,""]},scannerpy:{column:[3,0,0,"-"],common:[3,0,0,"-"],config:[3,0,0,"-"],database:[3,0,0,"-"],job:[3,0,0,"-"],kernel:[3,0,0,"-"],op:[3,0,0,"-"],partitioner:[3,0,0,"-"],profiler:[3,0,0,"-"],protobuf_generator:[3,0,0,"-"],sampler:[3,0,0,"-"],sink:[3,0,0,"-"],source:[3,0,0,"-"],stdlib:[4,0,0,"-"],streams:[3,0,0,"-"],table:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:staticmethod","6":"py:function","7":"py:classmethod"},terms:{"byte":[3,4],"class":[3,4,18,19,21,22],"default":[3,4,7,18,22],"enum":3,"final":[18,22],"function":[3,18,21,22],"import":[18,19,22],"int":3,"long":20,"new":[3,18,22],"null":3,"public":[18,22],"return":[3,4,18,22],"static":[3,4],"true":[3,18,22],"try":24,"while":[18,22],AWS:19,And:19,But:[18,22],For:[3,18,19,22],Ops:[1,3,18,21,22],That:[18,22],The:[3,6,17,18,20,22],Then:[6,18,22,24],There:[18,22],These:23,Used:3,Will:0,__main__:19,__name__:19,aac:7,abil:3,abl:[3,19],about:[3,18,22],abov:[6,7,18,22],access:[3,18,19,22],across:21,action:[18,22],activ:0,add:7,add_modul:3,address:3,adopt:[18,22],aerial:21,affect:3,after:[3,7,18,22],again:19,akin:17,alex:0,all:[3,6,7,18,20,21,22],allud:[18,22],alreadi:[3,7],also:[6,18,19,20,22],amazon:17,analysi:[0,19],analyz:[18,19,22],ani:[7,18,22],api:[9,18,19,22],apom:[4,5],app:[18,22],appear:0,append:[18,22],appli:3,applic:[9,18,19,21,22,24],appreci:0,apt:7,arbitrari:21,arg:3,argument:[3,18,22],arrai:[3,4,18,22],as_proto:4,ascii:3,assum:3,author:19,autoconf:7,autogen:7,autom:17,automak:7,automat:[3,7],avail:[3,9],avoid:[6,18,22],back:[3,18,19,22],background:4,bandwidth:19,bar:[3,18,22],base:[3,4,7],bash:[6,7],basic:[9,18,22,23],batch:[3,4],batch_load:3,batch_siz:3,bbox:19,bbox_a:4,bbox_b:4,bboxnm:4,been:19,befor:[3,18,22],behind:19,being:[4,5,19],between:[0,3,21],bin:6,binari:3,bind:[18,22],bitrat:3,blob:3,block:[3,18,22],body_bbox:4,bool:3,boost:7,both:21,bounded_st:3,box:[19,20],branch:6,brew:[7,20],buf:[3,4],build:[6,18,20,22],built:[18,20,22],builtin_function_or_method:3,bulk:3,bulk_fetch_video_metadata:3,bulk_job_id:3,caff:[6,7,18,20,22],call:[3,18,22],callback:3,camera:19,can:[3,6,9,18,19,20,22,23,24],carnegi:0,cast:19,cfg:3,chang:[18,19,22],check:[3,6,7,9,18,19,22],checkout:9,checkpoint_frequ:3,chrome:3,cinematographi:19,cite:0,citizen:21,clang:7,classmethod:4,click:[3,24],clip:[18,22],close:[3,4],cloud:[3,6,17,19,21],cluster:[17,19],cmake:7,cmu:[4,5],code:[3,18,22],codec:3,col:3,collabor:0,collect:[3,18,22],column:[1,18,22],column_nam:3,columntyp:3,com:[6,18,22,24],come:[18,22],command:[6,7,18,20,22],commit:[3,18,22],common:1,compat:20,compil:7,complet:[18,22],compon:9,compos:[6,21,24],compress:[3,19,21],compress_default:3,compress_video:3,comput:[3,19],concatent:3,concept:21,concurr:3,confidence_threshold:4,config:[1,4,7],config_path:3,configur:[3,6],congratul:7,connect:3,consid:3,consist:[6,18,22],construct:[3,18,22],contact:0,contain:[3,6,17],content:[1,18,19,22],convert:19,copi:[3,18,22],coreutil:7,correspond:3,cost:19,cpio:7,cpp:3,cpu:[3,6,19,21,24],cpu_pool:3,creat:[3,6,18,22],crichton:0,cuda:[6,7],cudnn6:6,cudnn7:6,cudnn:[6,7],curl:7,current:[3,18,19,22],custom:3,data:[3,18,21,22],databas:[1,19],dataflow:21,dataset:19,db_path:3,debug:3,decad:19,decod:21,decor:3,def:19,default_config:3,default_config_path:3,defin:3,delet:3,delete_t:3,demograph:19,depend:[6,7,20],deploy:17,describ:[3,18,22],descript:3,deseri:3,design:[18,19,21,22],detach:3,detail:[3,21,24],detect:[18,19,22],detect_fac:[4,19],detect_pos:4,determin:19,dev:7,devic:3,device_id:3,device_set:3,device_typ:3,devicehandl:3,devicetyp:3,didn:[18,22],differ:[18,22],direct:[7,24],directli:[3,18,19,22],director:19,directori:[7,18,22],directoroi:[18,22],discuss:[18,22],displai:3,distance_to:4,distribut:[6,19,21],dnn:19,docker:[20,24],document:18,doe:3,domain:3,done:[18,22],download:[18,22],download_temp_fil:4,downsampl:[18,22],draw:4,draw_bbox:19,draw_color:4,draw_pair:4,draw_threshold:4,dynam:3,each:[3,7,18,22],easi:[3,19],easier:19,easiest:[17,20],edu:[4,5],effect:3,effici:[0,19,21],eigen:7,either:[3,17,18,22],element:[3,21],email:[4,5],empti:3,enabl:[3,19],enable_watchdog:3,end:3,engin:19,entri:7,entrypoint:3,environ:6,essenti:[6,7],even:[18,21,22],eventu:3,everi:[3,18,22],exampl:[3,9,17,18,19,22,23,24],exampleop:3,except:3,exclus:3,exeactli:21,execut:[3,4,21],exist:3,exit:[18,22],expand:3,expect:3,explain:[18,19,22],express:21,extend:[18,22],extern:21,extra:3,extract:19,face:[18,19,22],face_bbox:4,face_detect:19,face_keypoint:4,face_model_weights_path:4,face_prototxt_path:4,facebook:19,fail:3,failur:3,fairli:[18,22],fals:[3,4],fast:[18,22],faster:19,fatahalian:0,fdk:7,featur:[9,18,19,22,23],ffmpeg:7,file:[3,6,18,22],filesystem:[18,22],film:19,finish:[7,18,22],first:[6,18,19,21,22],flag:[3,18,22],fledg:9,flip:20,flow:4,fmt:3,fns:3,follow:[7,18,20,22,24],forc:[3,4],form:[18,22],format:[3,18,21,22],found:23,fps:[3,4],frame:[3,4,18,19,21,22],frame_info:4,frame_width:4,framecolumn:[18,22],frames_per_row:4,frametyp:3,framework:20,from:[3,18,19,20,21,22],from_buff:4,from_fil:4,front:[18,22],full:[6,9],gather:[3,21],gdb:3,gener:[3,18,19,22],get:[6,7,17,19,20,24],get_active_job:3,get_cmak:4,get_compile_flag:4,get_includ:4,get_lib:4,get_link_flag:4,gflag:7,git:[6,7],github:[9,19],githubusercont:[6,24],given:[3,18,21,22],glog:7,gnutl:7,going:[18,22],googl:[3,17,19],googleapi:[18,22],gpu:[3,6,19,21],gpu_pool:3,graph:[3,21],group:3,group_siz:3,grpc:7,grpc_timeout:3,guid:[18,22],hand_keypoint:4,hand_model_weights_path:4,hand_prototxt_path:4,handl:[3,9,21],hanrahan:0,happen:[18,22],hardwar:19,has:[3,7,18,19,20,22],has_gpu:3,has_tabl:3,have:[3,6,9,18,19,22],haven:[18,22],hdf5:7,height:[18,22],help:[3,6],here:[18,22,23],high:3,histogram:[3,4],hollywood:19,homebrew:[7,20],how:[3,7,9,18,19,21,22,24],howev:[18,22],http:[6,18,22,24],human:3,hundr:21,ident:3,ignor:3,imag:[4,6,17,19,20],image_path:4,img:4,implement:3,includ:[19,21],increas:3,independ:3,index:[3,18,22],indic:[3,18,22],infer:3,inform:3,ingest:3,ingest_imag:4,ingest_video:[3,18,22],initi:3,inplac:[3,18,22],input:[3,4,18,22],input_column:3,input_frame_column:4,input_height:4,input_layer_nam:4,input_width:4,insert:3,insid:[6,7,18,22],instal:[3,6,9,18,22,24],instanc:[3,6],instanti:[18,22],instead:[3,18,19,22],intead:6,integ:6,integr:19,intel:7,interact:[9,18,22],interest:[18,22],intermedi:3,intern:3,interv:3,invok:3,io_packet_s:3,iou:4,ipynb:24,its:[3,6,7],job:1,job_id:3,job_nam:3,join:3,jupyt:[9,18,22],just:[3,18,19,22],keep:[18,19,22],kei:9,kernel:[1,4],kernelconfig:3,keyfram:3,keyframe_dist:3,keypoints_buff:4,keyword:3,kubernet:[9,19],kwarg:3,lame:7,lankl:4,larg:19,latenc:3,later:[18,22],latest:6,ld_library_path:7,lear:4,learn:[7,18,22],left:3,lelbow:4,length:19,let:[18,22],level:[18,22],leveldb:7,ley:4,lhip:4,libass:7,libatla:7,libboost:7,libbz2:7,libc:7,libcap:7,libcurl3:7,libeigen3:7,libfreetype6:7,libgflag:7,libgnutl:7,libgoogl:7,libgtest:7,libgtk2:7,libhdf5:7,libjpeg:7,liblapack:7,libleveldb:7,liblmdb:7,liblzma:7,libopenbla:7,libopenjpeg:7,libpng:7,libpq:7,libpqxx:7,librari:[1,3,18,19,22],libsdl2:7,libsnappi:7,libssl:7,libsuitespars:7,libtbb:7,libtheora:7,libtool:7,libva:7,libvdpau:7,libvorbi:7,libvpx:7,libx264:7,libxcb1:7,libxcb:7,libxvidcor:7,light:17,lightweight:6,like:[3,18,20,21,22],linux:6,list:[3,18,19,22],lknee:4,llvm:7,lmdb:7,load:[3,18,22],load_op:3,load_sparsity_threshold:3,load_thread:3,local:[6,7,21],local_path:4,localhost:24,locat:[18,22],look:[9,18,22],lookup:3,lossless:3,low:19,lshoulder:4,lwrist:4,machin:[3,6,17,19,21],machine_param:3,maco:20,mai:[3,18,21,22],main:[18,19,22],major:[7,21],make:[7,19,21],make_montag:4,manag:[3,6,17,18,21,22],mani:[3,23],manifold:19,master:[3,6,24],master_address:3,matplotlib:24,max_width:4,mean:[18,22],mean_color:4,measur:3,mellon:0,mercuri:7,metadata:19,method:3,mkdir:7,mkdir_p:3,model:[18,22],model_path:4,model_weights_path:4,models_path:4,modul:[1,19],more:[3,9,18,19,22,24],most:[6,19],movement:21,mp4:[3,19],much:19,multi:[18,22],multipl:3,must:3,mutual:3,name:[3,18,22],nasm:7,nativ:19,necessari:21,neck:4,need:[3,18,21,22],netdescriptor:4,network:21,never:19,new_job_retries_limit:3,new_stream:3,new_tabl:3,newli:[18,22],next:[18,22],nms:4,no_workers_timeout:3,node:[3,18,22],non:3,none:[3,4],normal:4,nose:4,notebook:24,now:[6,18,22],nproc:7,num_row:3,number:[3,18,22],numer:9,numpi:[3,18,22],nvidia:6,obj:3,object:[3,4,18,19,22],offset:3,onc:[9,18,22],one:[3,6,18,22],onli:[3,6,18,21,22],op_arg:[3,18,22],op_nam:3,opcolumn:3,open:19,opencv:[6,7,20],oper:[3,18,21,22],opgener:3,oppos:[18,22],ops:[3,18,21,22],option:3,opu:7,order:[18,22],orig_box:4,orig_pos:4,other:[3,18,21,22],otherwis:[3,18,22],our:[18,20,22],out:[6,7,9,17,18,19,20,21,22],output:[3,18,19,22],output_column:3,output_fram:[18,22],output_layer_nam:4,output_nam:[3,4],output_sampl:4,output_sampler_arg:4,output_t:[18,22],over:[3,18,19,22],overlapthresh:4,overview:21,overwrit:3,own:[17,18,19,22],p_conn1:3,p_conn2:3,packet:3,pad_mod:4,parallel:21,paramet:3,parent_row:3,part:[0,3],particular:3,partit:3,partition:1,pass:[3,18,22],past:[18,22],path:[3,4,7,19,24],pattern:[18,22],perform:[3,18,19,22],persist:[18,22],piec:[18,22],pip3:[6,20,24],pip:7,pipelin:[18,22],pipeline_instances_per_nod:3,pkg:7,place:[18,22],platform:[6,17,19],pleas:0,point:[18,22],pokewatchdog:3,pom:0,port:[3,6,24],pose:19,pose_keypoint:4,pose_model_weights_path:4,pose_scor:4,posenmskernel:4,posit:3,possibl:21,postgresql:7,pre:20,prebuilt:6,prefetch_table_metadata:3,preserve_aspect_ratio:4,previou:[3,19],print:[18,22],print_cmak:4,print_compile_flag:4,print_includ:4,print_lib:4,print_link_flag:4,proceed:0,process:[3,6,19,21],produc:3,product:19,profil:1,profiler_level:3,program:[18,22],progress:[3,18,22],project:0,proto:3,proto_nam:3,proto_path:3,proto_to_np:4,protobuf:[3,4,7],protobuf_gener:1,protobufgener:3,prototxt_path:4,provid:[3,6,7,9,17,18,19,22,23],put:[18,22],pybind:7,python3:[7,18,22],python:[1,18,19,22],python_kernel_fn:3,python_to_proto:3,pythonpath:7,qualiti:3,queri:[7,18,22],question:0,quickstart:[9,18],rais:3,ran:[18,22],random:[18,22],rang:[3,19],rankl:4,raw:[6,24],raw_frame_gen:4,rc5:7,read:[3,21],read_adv:3,read_lin:3,readabl:3,readi:[18,19,22],real:[9,24],rear:4,reason:3,recent:6,recommend:24,recv_conn:3,red:19,regist:3,register_op:3,register_python_kernel:3,register_python_op:3,registri:3,relbow:4,relev:3,reli:19,repeat:3,repeatnul:3,replac:[18,22],repo:7,repres:[3,18,21,22],represent:3,request:[3,24],requir:7,research:[0,6,20,24],reset:3,resiz:[18,22],resized_fram:[18,22],resized_t:[18,22],resolut:[18,22],resourc:3,respect:3,result:[3,19],retriev:3,return_profil:4,rey:4,rhip:4,rknee:4,row:[3,18,22],rshoulder:4,run:[3,6,17,24],runtim:[3,6],rwrist:4,sai:[18,22],same:[3,18,22],sampl:[3,18,22],sample_fac:19,sample_video:19,sampled_fram:[18,22],sampler:1,save:[18,19,22],save_mp4:[3,18,22],scalabl:21,scale:[0,3,17,19,21],scanner:[0,1,6,9,19,20,21,23,24],scannerexcept:3,scannerpi:[1,18,19,20,22],scannerresearch:6,scannertool:19,schedul:21,script:7,sdl:7,second:[18,22],section:[4,5,18,22],see:[3,18,22],select:[3,18,19,22],send:[4,5],send_conn:3,sequenc:[3,18,21,22],serial:[3,7],serv:3,server:[3,24],servic:[6,17],session:6,set:[3,6,7,23],shape0:4,shape1:4,shape2:4,shape:[18,22],share:3,shm0:7,should:[3,6,18,22],show_progress:3,shown:[18,22],shtool:7,shutdown:3,side:20,siggraph:0,simpl:[9,18,19,22],simpli:[18,22],sinc:[18,22],singl:[18,21,22],sink:[1,18,22],sink_arg:3,sinkgener:3,size:[3,4,18,22],slice:3,snappi:7,so_path:3,sooner:[4,5],sourc:[1,4,18,19,20,22],source_arg:3,sourcegener:3,space:[3,18,22],spars:21,spawn:3,special:[18,22],specif:3,specifi:[3,7,18,22],spin:19,split:[3,21],sql:[18,22],ssh:3,standard:[1,18,19,22],stanford:0,start:[3,6,7,19,20,24],start_clust:3,start_mast:3,start_work:3,state:[3,21],statist:[3,19],statu:3,stencil:3,step:[17,18,22,23],still:[4,5,18,22],stop:3,stop_clust:3,storag:[3,18,19,21,22],store:[18,21,22],str:3,stream:[1,18,21,22],streamsgener:3,stride:[3,18,22],strided_rang:3,stridedrang:3,string:3,subsampl:3,subset:3,substream:3,success:6,summar:[3,18,22],support:[3,6,7,19,20,21],sure:7,surround:19,swig:7,system:[9,19,21],szip:7,tabl:[1,18,22],table_nam:[3,4,18,22],tag:6,take:[3,9,18,20,22],talk:9,tap:20,target:3,task:3,task_timeout:3,taskpartition:3,tasks_in_queue_per_pu:3,tast:19,tell:[7,18,22],temp_directori:4,templates_path:4,tensorflow:[18,22],test:6,texi2html:7,texinfo:7,thei:[3,7,21],them:[3,18,22],theora:7,thi:[3,4,5,6,7,18,19,21,22],thick:4,think:6,third:[18,22],those:[7,18,22],three:[18,22],through:[9,18,22,24],time:[3,18,20,22],to_proto:3,togeth:[3,18,21,22],told:[18,22],toml:3,tool:[17,19],toolkit:19,top:[3,7,18,22],total_time_interv:3,trace:3,transform:[18,22],transpos:4,trend:19,tupl:[3,18,22],tutori:[9,18,22,24],two:[18,22],typ:[3,4],type:[3,4],typic:[18,22],unbounded_st:3,under:[18,22],understand:[9,24],union:3,univers:0,unless:3,unpack_str:3,unslic:3,unspecifi:3,untar:4,until:[3,18,22],unzip:7,upgrad:[6,24],url:4,usag:3,use:[0,3,6,9,18,19,22],used:[3,18,19,22,24],useful:[6,18,22],user:[18,22],uses:[3,6],uses_python:4,using:[6,7,9,17,18,20,22,24],util:[3,6],valu:3,variabl:3,variad:3,variadic_input:3,veri:[18,22],version:[6,18,19,22],via:[3,17],video:[0,3,6,19,21],videos_to_process:[18,22],view:21,virtual:6,vis:19,visit:[3,24],visual:3,wai:[17,20],wait:[3,18,22],wait_for_server_shutdown:3,wait_on_job:3,wait_on_job_gen:3,walk:[18,22],walkthrough:[9,22],want:[4,5,6,18,22],warmup:3,watchdog:3,web:17,weight:17,were:6,wget:[6,7,18,22,24],what:[3,18,22],when:3,where:[3,6,7,18,22],which:[3,6,9,18,19,21,22],why:19,wide:7,width:[18,22],within:21,without:[3,18,22],work:[18,21,22],work_packet_s:3,worker:[3,6],worth:19,would:3,write:[3,18,21,22],write_trac:3,write_video:4,written:[4,5],x264:7,x265:7,xfixes0:7,xvid:7,yasm:7,year:19,yet:[18,22],yield:3,yml:[6,24],you:[0,3,4,5,6,7,9,18,19,20,22,24],your:[0,6,7,17,18,19,21,22,24],yourself:24,zlib1g:7},titles:["Citation &amp; About","API Reference","Scanner C++ API","Scanner Python API","scannerpy.stdlib package","Scanner Standard Library","Docker","Building Scanner from source","Getting Started","Guide","Concepts","Database","Computation Graphs","Writing a custom Op","Writing a custom Sink","Writing a custom Source","Using a Cluster","Scanner on Kubernetes","Walkthrough","&lt;no title&gt;","Installation","&lt;no title&gt;","Quickstart","Tutorials","Interactive Jupyter Walkthrough"],titleterms:{"export":[18,22],Ops:[5,10,12],Using:16,about:0,api:[1,2,3],bbox:4,build:7,build_flag:4,citat:0,cluster:16,column:3,common:3,comput:[10,12,18,22],concept:10,config:3,content:[3,4],custom:[13,14,15],databas:[3,10,11,18,22],defin:[18,22],dep:7,docker:6,execut:[18,22],from:7,get:8,graph:[10,12,18,22],guid:9,ingest:[18,22],instal:[7,20],interact:24,job:[3,10,18,22],jupyt:24,kernel:3,kubernet:17,level:7,librari:5,maco:7,modul:[3,4],montag:4,mp4:[18,22],multipl:[18,22],net_descriptor:4,packag:[4,7],paper:0,partition:3,pipelin:4,pose:4,pose_nms_kernel:4,process:[18,22],profil:3,protobuf_gener:3,python:[3,7],quickstart:22,read:[18,22],reader:4,refer:1,result:[18,22],run:[7,18,22],sampler:3,scanner:[2,3,5,7,17,18,22],scannerpi:[3,4,7],sink:[3,5,10,12,14],sourc:[3,5,7,10,12,15],standard:5,start:[8,18,22],stdlib:4,stream:3,submodul:4,system:7,tabl:3,tutori:23,ubuntu:7,util:4,video:[4,18,22],walkthrough:[18,24],write:[13,14,15],writer:4}})