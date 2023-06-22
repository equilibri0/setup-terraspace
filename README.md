# Setup Terraspace Action

This action sets up a Terraspace environment for use in actions by:

- Installing tfenv and a specified version of Terraform
- Changing the directory to the specified Terraspace project
- Checking for the existence of a Gemfile
- Installing Ruby gems
- Installing Terraspace

## Inputs

### `tf_version`

**Optional** The version of Terraform to install. Defaults to `'latest'`.

### `ts_project`

**Optional** The path to the Terraspace project. Defaults to the root directory of the repository.

## Prerequisites

This action requires the `ruby/setup-ruby` action to be run before it. Here's an example:

```
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1
          bundler-cache: true

      - name: Setup Terraspace
        uses: equilibri0/setup-terraspace@v1
        with:
          tf_version: 1.5.1
          ts_project: 'my_terraspace_project'
```

In this example, the action will install Terraform version 0.15.3 and switch to the `my_terraspace_project` directory before starting the setup process.

## License

[MIT](LICENSE)
