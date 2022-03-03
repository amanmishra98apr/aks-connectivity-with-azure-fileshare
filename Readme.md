1st we push our code to azure devops
then create a azure pipeline to deploy our code's image to docker hub(amanmishra98)
deploy our docker image to docker hub
now save image details in deployment.yaml file(containers:
      - image: amanmishra98/nodejs_code_main:27)
now create and run a persistence volume in azure using persistence-volume.yaml
then create and run persistence-volume-claim.yaml to claim the created volume.
then run deployment.yaml
and our image will deploy to kubernetes cluster in pods.



references:-
https://zimmergren.net/mount-an-azure-storage-file-share-to-deployments-in-azure-kubernetes-services-aks/

https://cloud.netapp.com/blog/azure-cvo-blg-azure-kubernetes-service-configuring-persistent-volumes-in-aks

https://github.com/mandiladitya/Azure-File-Share-In-AKS

https://www.youtube.com/watch?v=1U5JdmQAdPE&t=938s