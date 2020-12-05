using Evercraft.Core;
using FluentAssertions;
using Xunit;

namespace Evercraft.Tests
{
    public class CharacterShould
    {

        private Character character = new Character();

        [Fact]
        public void HaveADefaultNameAtCreation()
        {
            character.Name.Should().Be("No Name");
        }

        [Fact]
        public void HaveADefaultAlignmentAtCreation()
        {
            character.Alignment.Should().Be(Alignment.Neutral);
        }

        [Fact]
        public void BeAbleToHaveItsNameChanged()
        {
            string name = "Zephyriana";
            
            character.Name = name;

            character.Name.Should().Be(name);
        }

        [Theory]
        [InlineData(Alignment.Evil)]
        [InlineData(Alignment.Neutral)]
        [InlineData(Alignment.Good)]
        public void HaveAnAlignmentThatCanChange(Alignment alignment)
        {
            character.Alignment = alignment;

            character.Alignment.Should().Be(alignment);
        }

    }
}
