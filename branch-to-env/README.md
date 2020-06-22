# Branch To Env javascript action

This action sets the `env` environment variables based on a pre-defined mapping for the current branch name.

## Inputs

None. (using the `GITHUB_REF` env var)

## Outputs

None. (setting the `env` env var)

## Example usage

    uses: ohoareau/actions/branch-to-env

or, for pull-requests (you can use that syntax in any circumstances):

    uses: ohoareau/actions/branch-to-env
    with:
        branch: ${{github.base_ref}}
