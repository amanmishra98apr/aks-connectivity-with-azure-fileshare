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


[2:20 pm, 05/03/2022] Aman Mishra: https://stackoverflow.com/questions/40335179/can-a-persistent-volume-be-resized
[2:25 pm, 05/03/2022] Aman Mishra: https://docs.microsoft.com/en-us/azure/aks/azure-files-volume
[4:21 pm, 05/03/2022] Aman Mishra: https://stackoverflow.com/questions/51297136/kubectl-error-the-object-has-been-modified-please-apply-your-changes-to-the-la
[7:33 pm, 05/03/2022] Aman Mishra: https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-organizing-with-namespaces
[7:44 pm, 05/03/2022] Aman Mishra: https://kubernetes.io/docs/concepts/storage/persistent-volumes/
[7:47 pm, 05/03/2022] Aman Mishra: https://kubernetes.io/docs/tasks/administer-cluster/change-pv-reclaim-policy/