load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@npm//:defs.bzl", "npm_link_all_packages")

copy_to_bin(
    name = "files",
    srcs = glob(["**/*"]),
)

npm_link_all_packages(name = "node_modules")

npm_package(
    name = "A",
    srcs = [
        ":files",
        ":node_modules",
    ],
    package = "A",
    visibility = ["//visibility:public"],
)
