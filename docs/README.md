# NGB documentation

NGB documentation is provided in a **markdown** format, that could be viewed directly from github or could be built into **html** representation

## Documentation index

The following sections are currently covered in a documentation
* Installation guide
    * [Overview](md/installation/overview.md)
    * [Using Docker](md/installation/docker.md)
    * [Using Binaries](md/installation/binaries.md)
* Command Line Interface guide
    * [Overview](md/cli/introduction.md)
    * [CLI Installation](md/cli/installation.md)
    * [Running a command](md/cli/running-command.md)
    * [Accomplishing typical tasks](md/cli/typical-tasks.md)
    * [Command reference](md/cli/command-reference.md)
* User Interface Guide
    * [Overview](md/user-guide/overview.md)
    * [Working with datasets](md/user-guide/datasets.md)
    * [Working with tracks](md/user-guide/tracks.md)
    * [Reference track](md/user-guide/tracks-reference.md)
    * [Genes track](md/user-guide/tracks-genes.md)        
    * [VCF track](md/user-guide/tracks-vcf.md)
    * [WIG track](md/user-guide/tracks-wig.md)
    * [BED track](md/user-guide/tracks-bed.md)
    * [Aignments track](md/user-guide/tracks-bam.md)
    * [Working with Annotations](md/user-guide/annotations.md)

## Building documentation

[MkDocs](http://www.mkdocs.org) is used to build documentation into **html** representation

So make sure `mkdocs` is installed before proceeding

```
$ mkdocs --version
mkdocs, version 0.16.0
```

If `mkdocs` is not installed - follow [MkDocs Installation Guide](http://www.mkdocs.org/#installation) before building NGB documentation

Once installed, obtain **markdown** sources from github
```
$ git clone https://github.com/epam/NGB.git
$ cd NGB/docs
```

Run build 
```
mkdocs build
```

This will create `site/` folder, containing built **html** documentation

By default, `epam-material` theme is used for **html** representation. This theme is based on [mkdocs-material](https://github.com/squidfunk/mkdocs-material)

To view documentation - navigate in `ngb/docs/site/` folder and launch `index.html` with a web-browser