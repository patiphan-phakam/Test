data "huaweicloud_cce_cluster" "cluster" {
  name   = "${var.project_id}-${var.envname}"
  status = "Available"
}

resource "local_file" "cluster_kube_config" {
  sensitive_content = data.huaweicloud_cce_cluster.cluster.kube_config_raw
  filename          = "/tmp/kube.config"
}
