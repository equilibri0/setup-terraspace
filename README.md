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

This action has the following prerequisites:

- Homebrew: The `Homebrew/actions/setup-homebrew@master` action should be run before this action to set up Homebrew.
- Ruby: The `ruby/setup-ruby@v1` action should be run before this action to install Ruby.

Here's an example workflow that includes the required prerequisites:


```
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Set up Homebrew
        uses: Homebrew/actions/setup-homebrew@master
      
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
