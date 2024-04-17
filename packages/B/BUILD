load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")
load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@npm//:defs.bzl", "npm_link_all_packages")

copy_to_bin(
    name = "files",
    srcs = glob(["**/*"]),
)

npm_link_all_packages(name = "node_modules")

js_binary(
    name = "script",
    data = [
        ":files",
        ":node_modules",
    ],
    entry_point = "main.mjs",
    visibility = ["//visibility:public"],
)

npm_package(
    name = "B",
    srcs = [
        ":files",
        ":node_modules",
    ],
    package = "B",
    visibility = ["//visibility:public"],
)
